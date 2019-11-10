declare module 'grapesjs' {
  export interface IBlock {
    id: string;
  }

  export interface ISector {
    name: string;
    buildProps: string[];
  }

  export interface IStyleManager {
    sectors: ISector[];
  }

  export interface IBlockManager {
    add(id: string, block: IBlock);
  }

  export interface IStorageManager {
    id?: string;
    type?: string;
    autosave?: boolean;
    autoload?: boolean;
    stepBeforeSave?: number;
    urlStore?: string;
    urlLoad?: string;
    headers?: {
      [key: string]: any;
    };
  }

  export interface IComponent {
    events?: Event[];

    type?: string;

    model?: IModel;

    view?: IView;

    tagName?: string;

    attributes: { [key: string]: any };

    components?: IComponent[];

    isComponent(element: HTMLElement): boolean;
  }

  export interface IModel {
    extend(model: IModel);

    init();
  }

  export interface IView {
    extend(view: IView);

    init();

    render();

    onRender();
  }

  export interface IDomComponents {
    addType(type: string, component: IComponent);

    getType(type: string): IComponent;

    processor(obj: object): IComponent;
  }

  export interface ICustomAttributes {
    badgable: boolean;
    draggable: boolean;
    droppable: boolean;
    editable: boolean;
    content: string;
    component: object;
    'custom-name': string;
    highlightable: boolean;
    icon: string;
    layerable: boolean;
    open: boolean;
    removable: boolean;
    resizable: boolean;
    script: string;
  }

  export type PresetType = 'webPage' | 'newsletter' | 'mjml';

  export interface IEditor {
    DomComponent: IDomComponents;

    BlockManager: IBlockManager;
  }
}
