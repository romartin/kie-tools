/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as vscode from "vscode";
import path = require("path");
import {
  configurationTokenKeys,
  definitelyPosixPath,
  getInterpolatedConfigurationValue,
} from "@kie-tools-core/vscode-extension/dist/ConfigurationInterpolation";
import { SwfVsCodeExtensionConfiguration } from "../configuration";

/**
 * The playbook store looks for all YAML files inside the workspace's /playbooks directory.
 */

const PLAYBOOKS_PATH = "playbooks";
const PLAYBOOK_EXTENSIONS_REGEX = new RegExp("^.*\\.(yaml|yml)$");

export class FsWatchingServiceAnsiblePlaybookStore {
  private fsWatcher: vscode.Disposable | undefined;
  private playbooks: string[] = [];

  constructor(
    private readonly args: { baseFileAbsolutePosixPath: string; configuration: SwfVsCodeExtensionConfiguration }
  ) {}

  public init() {
    const playbooksDirAbsolutePosixPath = getInterpolatedConfigurationValue({
      currentFileAbsolutePosixPath: this.args.baseFileAbsolutePosixPath,
      value: definitelyPosixPath(path.join(configurationTokenKeys["${fileDirname}"], "/" + PLAYBOOKS_PATH)),
    });

    this.fsWatcher = this.setupFsWatcher({
      playbooksPath: playbooksDirAbsolutePosixPath,
    });
    return this.refresh({
      playbooksPath: playbooksDirAbsolutePosixPath,
    });
  }

  private setupFsWatcher(args: { playbooksPath: string }): vscode.Disposable {
    const fsWatchers = [
      vscode.workspace.createFileSystemWatcher(
        new vscode.RelativePattern(vscode.Uri.parse(args.playbooksPath), "*.{yaml,yml}"),
        false,
        false,
        false
      ),
    ];

    const onDidCreateWatchers: vscode.Disposable[] = fsWatchers.map((fsWatcher) =>
      fsWatcher.onDidCreate(() => this.refresh(args))
    );
    const onDidChangeWatchers: vscode.Disposable[] = fsWatchers.map((fsWatcher) =>
      fsWatcher.onDidChange(() => this.refresh(args))
    );
    const onDidDeleteWatchers: vscode.Disposable[] = fsWatchers.map((fsWatcher) =>
      fsWatcher.onDidDelete(() => this.refresh(args))
    );

    return {
      dispose: () => {
        onDidCreateWatchers.forEach((onDidCreate) => onDidCreate.dispose());
        onDidChangeWatchers.forEach((onDidChange) => onDidChange.dispose());
        onDidDeleteWatchers.forEach((onDidDelete) => onDidDelete.dispose());
        fsWatchers.forEach((fsWatcher) => fsWatcher.dispose());
      },
    };
  }

  public getPlaybooks() {
    return this.playbooks;
  }

  public dispose(): void {
    this.fsWatcher?.dispose();
  }

  public async refresh(args: { playbooksPath: string }) {
    try {
      this.playbooks = [...(await this.readFileSystemPlaybooks(args.playbooksPath))];
    } catch (e) {
      console.error("Could not refresh Ansible Playbook store.", e);
    }
  }

  private readFileSystemPlaybooks(dirAbsolutePosixPath: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      const dirAbsolutePosixPathUri = vscode.Uri.parse(dirAbsolutePosixPath);
      const promises: Thenable<string[]>[] = [];

      vscode.workspace.fs.stat(dirAbsolutePosixPathUri).then((stats) => {
        if (!stats || stats.type !== vscode.FileType.Directory) {
          reject(`Invalid plabooks dir path: ${dirAbsolutePosixPath}`);
          return;
        }
        vscode.workspace.fs.readDirectory(dirAbsolutePosixPathUri).then(
          (files) => {
            if (!files || files.length <= 0) {
              resolve([]);
              return;
            }

            files.forEach(([fileName, type]) => {
              if (!(type === vscode.FileType.File && PLAYBOOK_EXTENSIONS_REGEX.test(fileName.toLowerCase()))) {
                return;
              }

              /*
                const fileUri = dirAbsolutePosixPathUri.with({
                    path: dirAbsolutePosixPathUri.path + "/" + fileName,
                  });
                });
                const rawData = await vscode.workspace.fs.readFile(fileUri);
                */

              promises.push(Promise.resolve([PLAYBOOKS_PATH + "/" + fileName]));
            });

            if (promises.length > 0) {
              Promise.all(promises).then((playbooks) => resolve(playbooks.flatMap((s) => s)));
            } else {
              resolve([]);
            }
          },
          (reason) => {
            console.error(`could not load folder in ${dirAbsolutePosixPathUri}.`, reason);
            return resolve([]);
          }
        );
      });
    });
  }
}
