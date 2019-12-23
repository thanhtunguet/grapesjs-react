import React from 'react';
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
declare const Editor: React.ForwardRefExoticComponent<IEditorProps & React.RefAttributes<HTMLDivElement>>;
export default Editor;
