import GrapesJS from 'grapesjs';
import mjml from 'grapesjs-mjml';
import newsletter from 'grapesjs-preset-newsletter';
import webpage from 'grapesjs-preset-webpage';
import 'grapesjs/dist/css/grapes.min.css';
import React from 'react';

const presets: any = {
  webpage,
  newsletter,
  mjml,
};

export interface EditorProps {
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

interface EditorState {
  editor: any;
}

class Editor extends React.Component<EditorProps, EditorState> {
  public static defaultProps: EditorProps = {
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

  public componentDidMount(): void {
    const {
      onInit,
      id,
      blockManager,
      styleManager,
      storageManager,
      width,
      height,
      plugins: propPlugins,
      presetType,
    } = this.props;

    const editor = GrapesJS.init({
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

    if (typeof onInit === 'function') {
      onInit(editor);
    }

    this.setState({
      editor,
    });
  }

  public componentWillUnmount(): void {
    const {editor} = this.state;
    const {
      onDestroy,
      id,
    } = this.props;
    if (editor) {
      if (typeof onDestroy === 'function') {
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
  }

  public render() {
    const {
      children,
      id,
    } = this.props;

    return (
      <div id={id}>
        {children}
      </div>
    );
  }
}

export default Editor;
