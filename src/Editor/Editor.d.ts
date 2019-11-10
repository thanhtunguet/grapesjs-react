import { IBlockManager, IStorageManager, IStyleManager, PresetType } from 'grapesjs';
import { ReactNode } from 'react';
import { Block } from '../core/Block';
import { Component } from '../core/Component';
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
        storageManager: any;
        styleManager: {};
        width: string;
        height: string;
        components: any[];
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
            "width": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "height": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "components": {
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
