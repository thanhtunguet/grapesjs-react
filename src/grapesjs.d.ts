declare module 'grapesjs' {

  export type PresetType = 'webPage' | 'newsletter' | 'mjml';

  export interface Editor {
    DomComponents: DomComponents;

    BlockManager: BlockManager;

    StorageManager: StorageManager;

    StyleManager: StyleManager;

    getContainer(): HTMLElement;
  }

  export interface StyleManager {
    init();
  }

  export interface BlockManager {
    init();
  }

  export interface StorageManager {
    init();
  }

  export interface Model {
    defaults: any;

    extend(...models: Model[]);
  }

  export interface View {
    defaults: any;

    extend(...models: Model[]);
  }

  export interface Component {
    model?: Model;

    view?: View;

    type?: string;

    tagName?: string;

    attributes?: { [key: string]: any };

    name?: string;

    removable?: boolean;

    draggable?: boolean;

    droppable?: boolean;

    badgable?: boolean;

    stylable?: boolean;

    'stylable-require': string[];

    unstylable?: boolean;

    'style-signature': string[];

    highlightable?: boolean;

    copyable?: boolean;

    resizable?: boolean;

    editable?: boolean;

    layerable?: boolean;

    selectable?: boolean;

    hoverable?: boolean;

    void?: boolean;

    content?: string;

    icon?: string;

    // tslint:disable-next-line:ban-types
    script?: string | Function;

    // tslint:disable-next-line:ban-types
    'script-export': string | Function;

    traits: string[];

    init();

    updated(property: string, value: any, previous: any): void;

    removed();

    is(type: string);

    props(): { [key: string]: any };
  }

  export interface DomComponents {
    init();

    addType(type: string, component: Component);

    getType(type: string): Component;
  }

  export default interface GrapesJS {
    editors: Editor[];
  }
}
