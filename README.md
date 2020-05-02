grapesjs-react
==============

_React wrapper for GrapesJS_

I am looking for [new maintainer](https://github.com/thanhtunguet/grapesjs-react/issues/35) for this package.

`grapesjs-react` v3 was fully rewritten from scratch. The package is now only responsible to expose hooks and control the editor lifecycle for these reasons:
- This package depends on `artf/grapesjs`, which does not support Typescript. It is hard to implement custom features Components, Blocks without declaration files.
- To be simple, this package should only control the lifecycle of the editor, leave the rest to the dependent projects.

### Install
```bash
yarn add grapesjs-react
// or
npm i grapesjs-react --save
```

### New editor props:
```typescript
export interface EditorProps {
  // Prefix identifier that will be used inside storing and loading
  id?: string;
    
  presetType?: 'webpage' | 'newsletter' | 'mjml';
  
  // https://grapesjs.com/docs/modules/Plugins.html#basic-plugin
  plugins?: string[];
    
  children?: ReactElement<any> | Array<ReactElement<any>>;
   
  // https://github.com/artf/grapesjs/blob/dev/src/storage_manager/config/config.js
  storageManager?: any;
  
  // https://github.com/artf/grapesjs/blob/dev/src/block_manager/config/config.js
  blockManager?: any;
    
  // https://github.com/artf/grapesjs/blob/dev/src/style_manager/config/config.js  
  styleManager?: {};
    
  width?: string | number;
    
  height?: string | number;
  
  // https://grapesjs.com/docs/modules/Components.html
  components?: object[];
    
  blocks?: object[];
    
  onInit?(editor): void;
    
  onDestroy?(editor): void;
}
 ```

### Default props of the editor:

```typescript
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
```

### Introduce new hooks:
  - `onInit`: Called after editor initializing, used for adding custom components, blocks, etc, ...
  - `onDestroy`: Called before editor unmounting, used for cleaning up.

### Import CSS:
```typescript
import 'grapesjs/dist/css/grapes.min.css';
```

See storybook demo: [https://grapesjs-react.thanhtunguet.info](https://grapesjs-react.thanhtunguet.info)
