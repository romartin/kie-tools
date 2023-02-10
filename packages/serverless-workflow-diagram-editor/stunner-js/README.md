# Stunner JS Bundle

# Usage

        // No iframe.
        window.gwtEditorBeans.get("StunnerJSEditor").get().setContent("somePath", "");
        // iframe.
        window.frames.editorFrame.contentWindow.gwtEditorBeans.get("StunnerJSEditor").get().setContent("somePath", "");

## Running in IntelliJ

Create a new Run/Debug GWT configuration as:

Module: `stunner-js`

GWT Module: `org.kie.stunner.editor.StunnerJSEditor`

User Super Dev Mode: `true`

VM Options:

        -Xmx8G
        -Xms1024m
        -Xss1M
        -Derrai.dynamic_validation.enabled=true
        -Derrai.ioc.jsinterop.support=true

Dev Mode Parameters:

        -generateJsInteropExports
        -style PRETTY // This parameter is optional
        -logLevel [ERROR, WARN, INFO, TRACE, DEBUG, SPAM, or ALL] // This parameter is optional

Start page: `index.html`

# TODOs

- Core
  - Decouple from unnecessary resources (js,css,etc)
    - See SwfDiagramEditorResources.ts
    - Analyze stunner-widges dependencies to resources, other modules shouldn't depend on
  - Support for native js types domain declaration
    - If object contains '**clazz**' -> It is JsType
    - If object DOES NOT contain '**clazz**' -> It is JsType(native=true)
      - Register definitionId field by the use of JsDomainInitializer
      - Integrate with js classes
- Domain
  - Refactor domain configuration state (Domain initialization stuff) to an object
    - decouple from JsAdapter\*\*\* stuff
    - also i18n?
  - Js runtime Domain Initialization
  - Fields for Diagram/Graph/Node/Edge, etc are not properly exposed to js, they're still obfuscated (maybe cause those are private final?)
- Shapes
  - Create some generic Shape & ShapeView types -> js declarations should only worry about lienzo (multipath / children)
  - Create some generic ShapeFactory for use in js declarations
  - Js runtime Shape Declarations (Shape, ShapeFactory, etc)
  - _Kirill_ Issues on edit mode with selection feature
  - _Kirill_ Issues with shapes title. No need for init at constructor, it is a runtime property that may change.
- Marshalling
  - Default JSON parsers for Diagram instance (ExampleParser)
