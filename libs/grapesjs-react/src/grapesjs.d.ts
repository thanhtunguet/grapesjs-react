declare module 'grapesjs-custom-code';
declare module 'grapesjs-lory-slider';
declare module 'grapesjs-parser-postcss';
declare module 'grapesjs-preset-webpage';
declare module 'grapesjs-style-bg';
declare module 'grapesjs-tabs';
declare module 'grapesjs-tooltip';
declare module 'grapesjs-touch';
declare module 'grapesjs-tui-image-editor';
declare module 'grapesjs-typed';

declare module 'grapesjs' {

  export const version: string;

  export function $(selector?: string): JQuery;

  export function init(config: EditorConfig): Editor;

  export const editors: Editor[];

  export interface CommandFunctionOptions {
    (): void;
  }

  export interface CommandHandlerOptions {
    run: (editor: Editor) => void;

    stop: (editor: Editor) => void;
  }

  export interface ButtonOptions {
    id: string;

    label?: string;

    className: string;

    command: string | Function;

    attributes?: {};

    active?: boolean;

    context?: string;
  }

  export interface Editor {
    Config: Parameters<typeof init>[0];

    BlockManager: {
      add(id: string, options: {}): void;
    };

    I18n: {
      addMessages(lang: {}): void;
    };

    Panels: {
      addButton(id: string, options: ButtonOptions): void;
      getButton(panelId: string, buttonId: string): any;
    };

    Modal: {
      setTitle(title: string): void;
      setContent(content?: HTMLElement | null): void;
      open(): void;
      getModel(): import('events').EventEmitter;
    };

    Commands: {
      add(id: string, options: CommandFunctionOptions | CommandHandlerOptions): void;
    };

    DomComponents: {
      clear(): any[];
    };

    getHtml(): string;

    getCss(): string;

    setDevice(device: string): void;

    runCommand(commandId: string): void;

    render(): void;

    destroy(): void;

    on(eventName: string, callback: (event?: Event) => void): void;
  }

  export interface EditorConfig {

    /**
     * The html target element.
     */
    container?: string;

    plugins?: any[];

    pluginsOpts?: { [p: string]: any };

    autorender?: boolean;

    // Style prefix
    stylePrefix?: string;

    // HTML string or object of components
    components?: string;

    // CSS string or object of rules
    style?: string;

    // If true, will fetch HTML and CSS from selected container
    fromElement?: boolean;

    // Show an alert before unload the page with unsaved changes
    noticeOnUnload?: boolean;

    // Show paddings and margins
    showOffsets?: boolean;

    // Show paddings and margins on selected component
    showOffsetsSelected?: boolean;

    // On creation of a new Component (via object), if the 'style' attribute is not
    // empty, all those roles will be moved in its new class
    forceClass?: boolean;

    // Height for the editor container
    height?: string;

    // Width for the editor container
    width?: string;

    // Type of logs to print with the logger (by default is used the devtool console).
    // Available by default: debug, info, warning, error
    // You can use `false` to disable all of them or `true` to print all of them
    log?: string[];

    // By default Grapes injects base CSS into the canvas. For example, it sets body margin to 0
    // and sets a default background color of white. This CSS is desired in most cases.
    // use this property if you wish to overwrite the base CSS to your own CSS. This is most
    // useful if for example your template is not based off a document with 0 as body margin.
    baseCss?: string;

    // CSS that could only be seen (for instance, inside the code viewer)
    protectedCss?: string;

    // CSS for the iframe which containing the canvas, useful if you need to custom something inside
    // (eg. the style of the selected component)
    canvasCss?: string;

    // Default command
    defaultCommand?: string;

    // Show a toolbar when the component is selected
    showToolbar?: boolean;

    // Allow script tag importing
    allowScripts?: boolean;

    // If true render a select of available devices
    showDevices?: boolean;

    // When enabled, on device change media rules won't be created
    devicePreviewMode?: boolean;

    // THe condition to use for media queries, eg. 'max-width'
    // Comes handy for mobile-first cases
    mediaCondition?: string;

    // Starting tag for variable inside scripts in Components
    tagVarStart?: string;

    // Ending tag for variable inside scripts in Components
    tagVarEnd?: string;

    // When false, removes empty text nodes when parsed, unless they contain a space
    keepEmptyTextNodes?: boolean;

    // Return JS of components inside HTML from 'editor.getHtml()'
    jsInHtml?: boolean;

    // Enable native HTML5 drag and drop
    nativeDnD?: boolean;

    // Enable multiple selection
    multipleSelection?: boolean;

    // Show the wrapper component in the final code, eg. in editor.getHtml()
    exportWrapper?: boolean;

    // The wrapper, if visible, will be shown as a `<body>`
    wrappesIsBody?: boolean;

    // Usually when you update the `style` of the component this changes the
    // element's `style` attribute. Unfortunately, inline styling doesn't allow
    // use of media queries (@media) or even pseudo selectors (eg. :hover).
    // When `avoidInlineStyle` is true all styles are inserted inside the css rule
    avoidInlineStyle?: boolean;

    // Avoid default properties from storable JSON data, like `components` and `styles`.
    // With this option enabled your data will be smaller (usefull if need to
    // save some storage space)
    avoidDefaults?: boolean;

    // (experimental)
    // The structure of components is always on the screen but it's not the same
    // for style rules. When you delete a component you might leave a lot of styles
    // which will never be used again, therefore they might be removed.
    // With this option set to true, styles not used from the CSS generator (so in
    // any case where `CssGenerator.build` is used) will be removed automatically.
    // But be careful, not always leaving the style not used mean you wouldn't
    // use it later, but this option comes really handy when deal with big templates.
    clearStyles?: boolean;

    // Specify the global drag mode of components. By default, components are moved
    // following the HTML flow. Two other options are available:
    // 'absolute' - Move components absolutely (design tools way)
    // 'translate' - Use translate CSS from transform property
    // To get more about this feature read: https://github.com/artf/grapesjs/issues/1936
    dragMode?: boolean;

    // Dom element
    el?: Element | string,

    // Configurations for Undo Manager
    //TODO: convert configs to ts
    undoManager?: any,

    //Configurations for Asset Manager
    assetManager?: any,

    //Configurations for Canvas
    canvas?: any,

    //Configurations for Layers
    layers?: any,

    //Configurations for Storage Manager
    storageManager?: any,

    //Configurations for Rich Text Editor
    rte?: any,

    //Configurations for DomComponents
    domComponents?: any,

    //Configurations for Modal Dialog
    modal?: any,

    //Configurations for Code Manager
    codeManager?: any,

    //Configurations for Panels
    panels?: any,

    //Configurations for Commands
    commands?: any,

    //Configurations for Css Composer
    cssComposer?: any,

    //Configurations for Selector Manager
    selectorManager?: any,

    //Configurations for Device Manager
    deviceManager?: any,

    //Configurations for Style Manager
    styleManager?: any,

    // Configurations for Block Manager
    blockManager?: any,

    // Configurations for Trait Manager
    traitManager?: any,

    // Texts
    textViewCode?: string,

    // Keep unused styles within the editor
    keepUnusedStyles?: boolean,

    // TODO
    multiFrames?: boolean
  }
}
