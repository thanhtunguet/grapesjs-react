import 'grapesjs/dist/css/grapes.min.css';
import React from 'react';
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
declare class Editor extends React.Component<EditorProps, EditorState> {
    static defaultProps: EditorProps;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default Editor;
