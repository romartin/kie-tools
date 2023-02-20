pnpm -F @kie-tools/serverless-workflow-diagram-editor... build:dev
cd packages/serverless-workflow-diagram-editor/stunner-js/
mvn clean install -DskipTests
cd ../../../
cd packages/stunner-js-editor-assets/
pnpm run build:dev
cd ../../
cd packages/stunner-js-editor-envelope/
pnpm run build:dev
cd ../../
cd packages/stunner-js-standalone-editor/
cd ../../

