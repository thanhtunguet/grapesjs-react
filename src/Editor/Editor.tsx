import GrapesJS from 'grapesjs';
import mjml from 'grapesjs-mjml';
import newsletter from 'grapesjs-preset-newsletter';
import webpage from 'grapesjs-preset-webpage';
import React from 'react';

const presets = {
  webpage,
  newsletter,
  mjml,
};

export interface IEditorProps {
  id?: string;

  presetType?: 'webpage' | 'newsletter' | 'mjml';

  plugins?: string[];

  children?: React.ReactElement<any> | Array<React.ReactElement<any>>;

  storageManager?: any;

  blockManager?: any;

  styleManager?: {};

  width?: string | number;

  height?: string | number;

  components?: object[];

  blocks?: object[];

  onInit?(editor: any): void;

  onDestroy?(editor: any): void;
}

const Editor = React.forwardRef(
  (props: IEditorProps, ref: React.Ref<HTMLDivElement>) => {
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
      children,
      plugins: propPlugins,
    } = props;

    const [editor, setEditor] = React.useState<any>(GrapesJS.editors.find((e: any) => {
      return e.getContainer().id === id;
    }));

    const handleCleanup = React.useCallback(
      () => {
        if (editor) {
          if (onDestroy) {
            onDestroy(editor);
          }
          GrapesJS.editors = GrapesJS.editors.filter((e: any) => e !== editor);
          editor.destroy();
          if (document) {
            const container: HTMLDivElement = document.getElementById(id) as HTMLDivElement;
            if (container) {
              container.innerHTML = '';
            }
          }
        }
      },
      [editor, id, onDestroy],
    );

    React.useEffect(
      () => {
        if (!editor) {
          const newEditor = GrapesJS.init({
            container: `#${id}`,
            fromElement: true,
            blockManager,
            styleManager,
            storageManager,
            width,
            height,
            plugins: [
              presets[presetType],
              ...propPlugins,
            ],
          });
          setEditor(newEditor);
          if (onInit) {
            onInit(newEditor);
          }
        }
        return handleCleanup;
      },
      // tslint:disable-next-line:max-line-length
      [blockManager, editor, handleCleanup, height, id, onInit, presetType, propPlugins, storageManager, styleManager, width],
    );

    return (
      <div id={id} ref={ref}>
        {children}
      </div>
    );
  },
);

Editor.defaultProps = {
  id: 'grapesjs-react-editor',
  presetType: 'newsletter',
  plugins: [],
  blocks: [],
  blockManager: {},
  storageManager: {},
  styleManager: {},
  width: 'auto',
  height: '100vh',
  components: [],
};

export default Editor;
