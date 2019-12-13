import GrapesJS from 'grapesjs';
import mjml from 'grapesjs-mjml';
import newsletter from 'grapesjs-preset-newsletter';
import webpage from 'grapesjs-preset-webpage';
import React, {ReactElement, Ref} from 'react';

const presets = {
  webpage,
  newsletter,
  mjml,
};

export interface IEditorProps {
  id?: string;

  presetType?: 'webpage' | 'newsletter' | 'mjml';

  plugins?: string[];

  children?: ReactElement<any> | Array<ReactElement<any>>;

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
  (props: IEditorProps, ref: Ref<HTMLDivElement>) => {
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
      children,
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
      [editor, onDestroy],
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
              ...props.plugins,
            ],
          });
          setEditor(newEditor);
          if (onInit) {
            onInit(editor);
          }
        }
        return handleCleanup;
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
