/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  SwfServiceCatalogFunction,
  SwfServiceCatalogFunctionArgumentData,
  SwfServiceCatalogFunctionSourceType,
  SwfServiceCatalogService,
  SwfServiceCatalogServiceSourceType,
} from "@kie-tools/serverless-workflow-service-catalog/dist/api";
import * as jsonc from "jsonc-parser";
import { posix as posixPath } from "path";
import { TextDocument } from "vscode-languageserver-textdocument";
import { CodeLens, CompletionItem, Diagnostic, Position, Range } from "vscode-languageserver-types";
import { FileLanguage } from "../api";
import * as swfModelQueries from "./modelQueries";
import { findNodesAtLocation } from "./findNodesAtLocation";
import { doRefValidation } from "./refValidation";
import {
  SwfCompletionItemServiceCatalogService,
  SwfLanguageServiceCodeCompletion,
} from "./SwfLanguageServiceCodeCompletion";
import {
  SwfLanguageServiceCodeLenses,
  SwfLanguageServiceCodeLensesFunctionsArgs,
} from "./SwfLanguageServiceCodeLenses";
import { CodeCompletionStrategy, LsHover, SwfJsonPath, SwfLsNode } from "./types";

export type SwfLanguageServiceConfig = {
  shouldConfigureServiceRegistries: () => boolean; //TODO: See https://issues.redhat.com/browse/KOGITO-7107
  shouldServiceRegistriesLogIn: () => boolean; //TODO: See https://issues.redhat.com/browse/KOGITO-7107
  canRefreshServices: () => boolean; //TODO: See https://issues.redhat.com/browse/KOGITO-7107
  getSpecsDirPosixPaths: (
    textDocument: TextDocument
  ) => Promise<{ specsDirRelativePosixPath: string; specsDirAbsolutePosixPath: string }>;
  shouldDisplayServiceRegistriesIntegration: () => Promise<boolean>;
  shouldReferenceServiceRegistryFunctionsWithUrls: () => Promise<boolean>;
  shouldIncludeJsonSchemaDiagnostics: () => Promise<boolean>;
};

export type SwfLanguageServiceArgs = {
  fs: {};
  lang: {
    fileLanguage: FileLanguage;
    fileMatch: string[];
  };
  serviceCatalog: {
    global: {
      getServices: () => Promise<SwfServiceCatalogService[]>;
    };
    relative: {
      getServices: (textDocument: TextDocument) => Promise<SwfServiceCatalogService[]>;
    };
    getServiceFileNameFromSwfServiceCatalogServiceId: (
      registryName: string,
      swfServiceCatalogServiceId: string
    ) => Promise<string>;
  };
  config: SwfLanguageServiceConfig;
};

export class SwfLanguageService {
  constructor(private readonly args: SwfLanguageServiceArgs) {}

  public async getHoverItems(args: {
    content: string;
    uri: string;
    cursorPosition: Position;
    cursorWordRange: Range;
    rootNode: SwfLsNode | undefined;
    codeCompletionStrategy: CodeCompletionStrategy;
  }): Promise<LsHover[]> {
    if (!args.rootNode) {
      return [];
    }

    const doc = TextDocument.create(args.uri, this.args.lang.fileLanguage, 0, args.content);
    const cursorOffset = doc.offsetAt(args.cursorPosition);

    const currentNode = findNodeAtOffset(args.rootNode, cursorOffset, true);
    if (!currentNode) {
      return [];
    }

    const currentNodePosition = {
      start: doc.positionAt(currentNode.offset),
      end: doc.positionAt(currentNode.offset + currentNode.length),
    };

    const swfCompletionItemServiceCatalogServices = await Promise.all(
      [
        ...(await this.args.serviceCatalog.global.getServices()),
        ...(await this.args.serviceCatalog.relative.getServices(doc)),
      ].map(async (service) => ({
        ...service,
        functions: await Promise.all(
          service.functions.map(async (func) => ({
            ...func,
            operation: await this.getSwfCompletionItemServiceCatalogFunctionOperation(service, func, doc),
          }))
        ),
      }))
    );
    const result = await Promise.all(
      Array.from(hovers.entries())
        .filter(([path, _]) =>
          args.codeCompletionStrategy.shouldComplete({
            root: args.rootNode,
            node: currentNode,
            path: path,
            content: args.content,
            cursorOffset: cursorOffset,
            cursorPosition: args.cursorPosition,
          })
        )
        .map(([_, hoversDelegate]) => {
          return hoversDelegate({
            document: doc,
            cursorPosition: args.cursorPosition,
            currentNode,
            currentNodePosition,
            rootNode: args.rootNode!,
            swfCompletionItemServiceCatalogServices,
            langServiceConfig: this.args.config,
          });
        })
    );

    return result.flat();
  }

  public async getCompletionItems(args: {
    content: string;
    uri: string;
    cursorPosition: Position;
    cursorWordRange: Range;
    rootNode: SwfLsNode | undefined;
    codeCompletionStrategy: CodeCompletionStrategy;
  }): Promise<CompletionItem[]> {
    const doc = TextDocument.create(args.uri, this.args.lang.fileLanguage, 0, args.content);
    const cursorOffset = doc.offsetAt(args.cursorPosition);

    if (!args.rootNode) {
      return args.content.trim().length
        ? []
        : SwfLanguageServiceCodeCompletion.getEmptyFileCodeCompletions({ ...args, cursorOffset, document: doc });
    }

    const currentNode = findNodeAtOffset(args.rootNode, cursorOffset, true);
    if (!currentNode) {
      return [];
    }

    const currentNodeRange: Range = {
      start: doc.positionAt(currentNode.offset),
      end: doc.positionAt(currentNode.offset + currentNode.length),
    };

    const overwriteRange = ["string", "number", "boolean", "null"].includes(currentNode?.type)
      ? currentNodeRange
      : args.cursorWordRange;

    const swfCompletionItemServiceCatalogServices = await Promise.all(
      [
        ...(await this.args.serviceCatalog.global.getServices()),
        ...(await this.args.serviceCatalog.relative.getServices(doc)),
      ].map(async (service) => ({
        ...service,
        functions: await Promise.all(
          service.functions.map(async (func) => ({
            ...func,
            operation: await this.getSwfCompletionItemServiceCatalogFunctionOperation(service, func, doc),
          }))
        ),
      }))
    );

    const matchedCompletions = Array.from(completions.entries()).filter(([path, _]) =>
      args.codeCompletionStrategy.shouldComplete({
        content: args.content,
        cursorOffset: cursorOffset,
        cursorPosition: args.cursorPosition,
        node: currentNode,
        path,
        root: args.rootNode,
      })
    );

    const result = await Promise.all(
      matchedCompletions.map(([_, completionItemsDelegate]) => {
        return completionItemsDelegate({
          codeCompletionStrategy: args.codeCompletionStrategy,
          currentNode,
          currentNodeRange,
          cursorOffset,
          cursorPosition: args.cursorPosition,
          document: doc,
          langServiceConfig: this.args.config,
          overwriteRange,
          rootNode: args.rootNode!,
          swfCompletionItemServiceCatalogServices,
        });
      })
    );

    return Promise.resolve(result.flat());
  }

  public async getDiagnostics(args: {
    content: string;
    uriPath: string;
    rootNode: SwfLsNode | undefined;
    getSchemaDiagnostics: (textDocument: TextDocument, fileMatch: string[]) => Promise<Diagnostic[]>;
  }): Promise<Diagnostic[]> {
    if (!args.rootNode) {
      return [];
    }

    // this ensure the document is validated again
    const docVersion = Math.floor(Math.random() * 1000);

    const textDocument = TextDocument.create(
      args.uriPath,
      `serverless-workflow-${this.args.lang.fileLanguage}`,
      docVersion,
      args.content
    );

    const refValidationResults = doRefValidation({ textDocument, rootNode: args.rootNode });

    const schemaValidationResults = (await this.args.config.shouldIncludeJsonSchemaDiagnostics())
      ? await args.getSchemaDiagnostics(textDocument, this.args.lang.fileMatch)
      : [];

    return [...schemaValidationResults, ...refValidationResults];
  }

  public async getCodeLenses(args: {
    content: string;
    uri: string;
    rootNode: SwfLsNode | undefined;
    codeCompletionStrategy: CodeCompletionStrategy;
  }): Promise<CodeLens[]> {
    if (!args.content.trim().length) {
      return SwfLanguageServiceCodeLenses.createNewSWF();
    }

    if (!args.rootNode) {
      return [];
    }

    const document = TextDocument.create(args.uri, this.args.lang.fileLanguage, 0, args.content);

    const displayRhhccIntegration = await this.args.config.shouldDisplayServiceRegistriesIntegration();
    const codeLensesFunctionsArgs: SwfLanguageServiceCodeLensesFunctionsArgs = {
      config: this.args.config,
      document,
      content: args.content,
      rootNode: args.rootNode,
      codeCompletionStrategy: args.codeCompletionStrategy,
    };

    return [
      ...(displayRhhccIntegration ? SwfLanguageServiceCodeLenses.setupServiceRegistries(codeLensesFunctionsArgs) : []),
      ...(displayRhhccIntegration ? SwfLanguageServiceCodeLenses.logInServiceRegistries(codeLensesFunctionsArgs) : []),
      /*
     TODO: maybe make refresh registries a single config
      ...(displayRhhccIntegration
        ? SwfLanguageServiceCodeLenses.refreshServiceRegistries(codeLensesFunctionsArgs)
        : []),*/
      ...SwfLanguageServiceCodeLenses.refreshServiceRegistries(codeLensesFunctionsArgs),
      ...SwfLanguageServiceCodeLenses.addFunction(codeLensesFunctionsArgs),
      ...SwfLanguageServiceCodeLenses.addEvent(codeLensesFunctionsArgs),
      ...SwfLanguageServiceCodeLenses.addState(codeLensesFunctionsArgs),
    ];
  }

  public dispose() {
    // empty for now
  }

  private async getSwfCompletionItemServiceCatalogFunctionOperation(
    containingService: SwfServiceCatalogService,
    func: SwfServiceCatalogFunction,
    document: TextDocument
  ): Promise<string> {
    const { specsDirRelativePosixPath } = await this.args.config.getSpecsDirPosixPaths(document);

    if (func.source.type === SwfServiceCatalogFunctionSourceType.REMOTE) {
      return `${func.source.operation}`;
    }

    if (func.source.type === SwfServiceCatalogFunctionSourceType.LOCAL_FS) {
      const serviceFileName = posixPath.basename(func.source.serviceFileAbsolutePath);
      const serviceFileRelativePosixPath = posixPath.join(specsDirRelativePosixPath, serviceFileName);
      return `${serviceFileRelativePosixPath}#${func.name}`;
    } else if (
      (await this.args.config.shouldReferenceServiceRegistryFunctionsWithUrls()) &&
      containingService.source.type === SwfServiceCatalogServiceSourceType.SERVICE_REGISTRY &&
      func.source.type === SwfServiceCatalogFunctionSourceType.SERVICE_REGISTRY
    ) {
      return `${containingService.source.url}#${func.name}`;
    } else if (
      containingService.source.type === SwfServiceCatalogServiceSourceType.SERVICE_REGISTRY &&
      func.source.type === SwfServiceCatalogFunctionSourceType.SERVICE_REGISTRY
    ) {
      const serviceFileName = await this.args.serviceCatalog.getServiceFileNameFromSwfServiceCatalogServiceId(
        containingService.source.registry,
        containingService.source.id
      );
      const serviceFileRelativePosixPath = posixPath.join(specsDirRelativePosixPath, serviceFileName);
      return `${serviceFileRelativePosixPath}#${func.name}`;
    } else {
      throw new Error("Unknown Service Catalog function source type");
    }
  }
}

const hovers = new Map<
  SwfJsonPath,
  (args: {
    swfCompletionItemServiceCatalogServices: SwfCompletionItemServiceCatalogService[];
    document: TextDocument;
    cursorPosition: Position;
    currentNode: SwfLsNode;
    currentNodePosition: { start: Position; end: Position };
    rootNode: SwfLsNode;
    langServiceConfig: SwfLanguageServiceConfig;
  }) => Promise<LsHover[]>
>([
  [
    ["states", "*", "actions", "*", "functionRef", "arguments", "*"],
    ({ currentNode, rootNode, swfCompletionItemServiceCatalogServices }) => {
      if (currentNode.type !== "string") {
        console.debug("Cannot hover: item should be a string.");
        return Promise.resolve([]);
      }

      if (!currentNode.parent?.parent?.parent?.parent) {
        return Promise.resolve([]);
      }

      const swfFunctionRefName: string = findNodeAtLocation(currentNode.parent.parent.parent.parent, [
        "refName",
      ])?.value;

      return getFunctionRefArgHovers({
        currentNode,
        rootNode,
        swfFunctionRefName,
        swfCompletionItemServiceCatalogServices,
      });
    },
  ],
  [
    ["states", "*", "actions", "*", "functionRef", "arguments", "*", "*"],
    ({ currentNode, rootNode, swfCompletionItemServiceCatalogServices }) => {
      if (currentNode.type !== "string") {
        console.debug("Cannot hover: item should be a string.");
        return Promise.resolve([]);
      }

      if (!currentNode.parent?.parent?.parent?.parent?.parent?.parent) {
        return Promise.resolve([]);
      }

      const swfFunctionRefName: string = findNodeAtLocation(currentNode.parent.parent.parent.parent.parent.parent, [
        "refName",
      ])?.value;

      return getFunctionRefArgHovers({
        currentNode,
        rootNode,
        swfFunctionRefName,
        swfCompletionItemServiceCatalogServices,
      });
    },
  ],
]);

const completions = new Map<
  SwfJsonPath,
  (args: {
    codeCompletionStrategy: CodeCompletionStrategy;
    currentNode: SwfLsNode;
    currentNodeRange: Range;
    cursorOffset: number;
    cursorPosition: Position;
    document: TextDocument;
    langServiceConfig: SwfLanguageServiceConfig;
    overwriteRange: Range;
    rootNode: SwfLsNode;
    swfCompletionItemServiceCatalogServices: SwfCompletionItemServiceCatalogService[];
  }) => Promise<CompletionItem[]>
>([
  [["start"], SwfLanguageServiceCodeCompletion.getStartCompletions],
  [["functions", "*"], SwfLanguageServiceCodeCompletion.getFunctionCompletions],
  [["functions", "*", "operation"], SwfLanguageServiceCodeCompletion.getFunctionOperationCompletions],
  [["events", "*"], SwfLanguageServiceCodeCompletion.getEventsCompletions],
  [["states", "*"], SwfLanguageServiceCodeCompletion.getStatesCompletions],
  [["states", "*", "actions", "*", "functionRef"], SwfLanguageServiceCodeCompletion.getFunctionRefCompletions],
  [
    ["states", "*", "actions", "*", "functionRef", "refName"],
    SwfLanguageServiceCodeCompletion.getFunctionRefRefnameCompletions,
  ],
  [
    ["states", "*", "actions", "*", "functionRef", "arguments"],
    SwfLanguageServiceCodeCompletion.getFunctionRefArgumentsCompletions,
  ],
  [["states", "*", "onEvents", "*", "eventRefs", "*"], SwfLanguageServiceCodeCompletion.getEventRefsCompletions],
  [["states", "*", "transition"], SwfLanguageServiceCodeCompletion.getTransitionCompletions],
  [["states", "*", "dataConditions", "*", "transition"], SwfLanguageServiceCodeCompletion.getTransitionCompletions],
  [["states", "*", "defaultCondition", "transition"], SwfLanguageServiceCodeCompletion.getTransitionCompletions],
  [["states", "*", "eventConditions", "*", "transition"], SwfLanguageServiceCodeCompletion.getTransitionCompletions],
]);

function getFunctionRefArgHovers(args: {
  swfFunctionRefName: string;
  currentNode: SwfLsNode;
  rootNode: SwfLsNode;
  swfCompletionItemServiceCatalogServices: SwfCompletionItemServiceCatalogService[];
}): Promise<LsHover[]> {
  if (!args.swfFunctionRefName) {
    return Promise.resolve([]);
  }

  const swfFunction = swfModelQueries
    .getFunctions(args.rootNode)
    ?.filter((f) => f.name === args.swfFunctionRefName)
    .pop();

  if (!swfFunction) {
    return Promise.resolve([]);
  }

  const swfServiceCatalogFunc = args.swfCompletionItemServiceCatalogServices
    .flatMap((f) => f.functions)
    .filter((f) => {
      return f.operation === swfFunction.operation;
    })
    .pop()!;

  if (!swfServiceCatalogFunc) {
    return Promise.resolve([]);
  }

  const argument = <SwfServiceCatalogFunctionArgumentData>swfServiceCatalogFunc.arguments[args.currentNode.value];

  if (!argument || !argument.description) {
    return Promise.resolve([]);
  }

  const result: LsHover[] = [
    { contents: `Argument: \`${args.currentNode.value}\`` },
    { contents: argument.description },
  ];
  return Promise.resolve(result);
}

export function findNodeAtLocation(root: SwfLsNode, path: SwfJsonPath): SwfLsNode | undefined {
  return findNodesAtLocation({ root, path })[0];
}

export function findNodeAtOffset(root: SwfLsNode, offset: number, includeRightBound?: boolean): SwfLsNode | undefined {
  return jsonc.findNodeAtOffset(root as jsonc.Node, offset, includeRightBound) as SwfLsNode;
}

export function getNodePath(node: SwfLsNode): SwfJsonPath {
  return jsonc.getNodePath(node as jsonc.Node);
}

/**
 * Test if position `a` equals position `b`.
 * This function is compatible with https://microsoft.github.io/monaco-editor/api/classes/monaco.Position.html#equals-1
 *
 * @param a -
 * @param b -
 * @returns true if the positions are equal, false otherwise
 */
export const positions_equals = (a: Position | null, b: Position | null): boolean =>
  a?.line === b?.line && a?.character == b?.character;
