import GrapesJS, {IBlockManager, IEditor, IStorageManager, IStyleManager, PresetType} from 'grapesjs';
import * as React from 'react';
import {ReactNode, useEffect} from 'react';
import {Block} from '../core/Block';
import {Component} from '../core/Component';
import './Editor.scss';

export interface IEditorProps {
  id?: string;
  presetType?: PresetType;
  plugins?: string[];
  children?: ReactNode | ReactNode[];
  storageManager?: IStorageManager;
  blockManager?: IBlockManager;
  styleManager?: IStyleManager;
  width?: string | number;
  height?: string | number;
  components?: Component[];
  blocks?: Block[];
  onInit?: (editor) => void;
  onDestroy?: (editor) => void;
}

function Editor(props: IEditorProps) {
  const [editor, setEditor] = React.useState<IEditor>(GrapesJS.editors.find((e) => e.getContainer().id === props.id));
  const {
    id,
    onInit,
    onDestroy,
    presetType,
    blockManager,
    storageManager,
    styleManager,
    width,
    height,
    components,
    blocks,
  } = props;

  useEffect(
    () => {
      let preset: Promise<any>;
      switch (presetType) {
        case 'webPage':
          preset = import('grapesjs-preset-webpage');
          break;
        case 'newsletter':
          preset = import('grapesjs-preset-newsletter');
          break;
        default:
        case 'mjml':
          preset = import('grapesjs-mjml');
          break;
      }

      if (editor) {
        if (document) {
          const container: HTMLDivElement = document.getElementById(props.id) as HTMLDivElement;
          if (container) {
            container.append(editor.render());
          }
        }
      } else {
        preset
          .then(({default: presetObject}) => {
            const newEditor = GrapesJS.init({
              container: `#${id}`,
              fromElement: true,
              blockManager,
              styleManager,
              storageManager,
              width,
              height,
              plugins: [
                presetObject,
                ...props.plugins,
              ],
            });

            const defaultType = newEditor.DomComponents.getType('default');
            const defaultModel = defaultType.model;
            const defaultView = defaultType.view;
            components.forEach((component: Component) => {
              newEditor.DomComponents.addType(
                component.type,
                {
                  model: defaultModel.extend(
                    {
                      defaults: Object.assign({}, defaultModel.prototype.defaults),
                    },
                    {
                      isComponent: component.isComponent.bind(this),
                    },
                  ),
                  view: defaultView.extend({
                    events: {
                      ...component.events,
                    },
                    render: component.render.bind(this),
                  }),
                },
              );
            });
            blocks.forEach((block: Block) => {
              newEditor.BlockManager.add(block.id, block);
            });

            setEditor(newEditor);
            if (onInit) {
              onInit(editor);
            }
          });
      }

      return function cleanup() {
        if (editor) {
          if (onDestroy) {
            onDestroy(editor);
          }
          GrapesJS.editors = GrapesJS.editors.filter((e) => e !== editor);
          editor.destroy();
          if (document) {
            const container: HTMLDivElement = document.getElementById(props.id) as HTMLDivElement;
            if (container) {
              container.innerHTML = null;
            }
          }
        }
      };
    },
    [
      editor,
      id,
      blockManager,
      styleManager,
      storageManager,
      onInit,
      presetType,
      onDestroy,
      width,
      height,
      blocks,
      components,
      props,
    ],
  );

  return (
    <div id={props.id}>
      {props.children}
    </div>
  );
}

Editor.defaultProps = {
  id: 'grapesjs-react-editor',
  presetType: 'newsletter',
  plugins: [],
  blocks: [],
  blockManager: {},
  storageManager: null,
  styleManager: {},
  width: 'auto',
  height: '100vh',
  components: [],
};

export default Editor;

(window as any).GrapesJS = GrapesJS;
