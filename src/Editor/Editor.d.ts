import { ReactNode } from 'react';
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
    onInit?: (editor: any) => void;
    onDestroy?: (editor: any) => void;
}
declare function Editor(props: IEditorProps): JSX.Element;
declare namespace Editor {
    var defaultProps: {
        id: string;
        presetType: string;
        plugins: any[];
        blocks: any[];
        blockManager: {};
        storageManager: {};
        styleManager: {};
    };
    var displayName: string;
    var __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "id": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "presetType": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "plugins": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "storageManager": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "blockManager": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "styleManager": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "blocks": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "onInit": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "onDestroy": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
        };
    };
}
export default Editor;
