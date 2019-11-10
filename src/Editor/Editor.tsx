import GrapesJS from 'grapesjs';
import * as React from 'react';
import {ReactNode, useEffect} from 'react';
import './Editor.scss';

export interface IEditorProps {
  id?: string;
  presetType?: 'webPage' | 'newsletter' | 'mjml';
  plugins?: string[];
  children?: ReactNode | ReactNode[];
  storageManager?: any;
  blockManager?: any;
  styleManager?: any;
  blocks?: any;

  onInit?: (editor) => void;
  onDestroy?: (editor) => void;
}

function Editor(props: IEditorProps) {
  const [editor, setEditor] = React.useState(GrapesJS.editors.find((e) => e.getContainer().id === props.id));
  const {id, onInit, onDestroy, presetType, blockManager, storageManager, styleManager} = props;

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
              fromElement: true,
              container: `#${id}`,
              blockManager,
              styleManager,
              storageManager,
              plugins: [
                presetObject,
                ...props.plugins,
              ],
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
        }
      };
    },
    [editor, id, blockManager, styleManager, storageManager, onInit, presetType, onDestroy, props],
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
  storageManager: {},
  styleManager: {},
};

export default Editor;

(window as any).GrapesJS = GrapesJS;
