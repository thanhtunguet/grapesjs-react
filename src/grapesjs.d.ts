declare module 'grapesjs' {
  export interface EditorInstance {
    cid: string;
    _changing: string;
    initBaseColorPicker: string;
    _listenId: string;
    defaultRunning: string;
  }

  export interface Editor {
    $: Function;
    editor: EditorInstance;
    init: Function;
    getConfig: Function;
    getHtml: Function;
    getCss: Function;
    getJs: Function;
    getComponents: Function;
    getWrapper: Function;
    setComponents: Function;
    addComponents: Function;
    getStyle: Function;
    setStyle: Function;
    getSelected: Function;
    getSelectedAll: Function;
    getSelectedToStyle: Function;
    select: Function;
    selectAdd: Function;
    selectRemove: Function;
    selectToggle: Function;
    setDevice: Function;
    getDevice: Function;
    runCommand: Function;
    stopCommand: Function;
    store: Function;
    load: Function;
    getContainer: Function;
    getDirtyCount: Function;
    refresh: Function;
    setCustomRte: Function;
    setCustomParserCss: Function;
    setDragMode: Function;
    log: Function;
    t: Function;
    on: Function;
    once: Function;
    off: Function;
    trigger: Function;
    destroy: Function;
    getEl: Function;
    getModel: Function;
    render: Function;
  }
  
  export declare var editors: Editor[];

  export declare function init(options?: any);
}
