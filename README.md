GrapesJS React Integration
==========================
_The first integration of GrapesJS for React._

1. Installation
    ```bash
    yarn add grapesjs-react
    ```

2. Usage
    Editor:
    ```javascript
    import React, {Component} from 'react';
    import {GEditor} from 'grapesjs-react';

    class GEditorExample extends Component {
     render() {
       return (
         <GEditor/>
         );
       }
    }

    export default GEditorExample;
    ```
    
    Custom block [src/example/CustomBlock.tsx](https://github.com/thanhtunguet/grapesjs-react/blob/master/src/example/CustomBlock.js):
    ```javascript
    import React from 'react';
    import {GEditor, GBlock} from 'grapesjs-react';   
    import 'antd/dist/antd.min.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    
    class SimpleBlock extends GBlock {
      content = `<div class="simple-block"> This is a simple block </div>`;
    
      constructor() {
        super('simple-block', 'Simple Block');
      }
    }
    
    function CustomBlock() {
      return (
        <div className="container-fluid">
          <div>
            <GEditor id="geditor" newsletter blocks={[
              new SimpleBlock(),
            ]}/>
          </div>
        </div>
      );
    }
    
    export default CustomBlock;
    ```
3. Options

    | Props      | Description             | Type                    | Default Value |
    |------------|-------------------------|-------------------------|---------------|
    | components | Custom components       | Array<GComponent>       | Empty         |
    | plugins    | Additional plugins      | Array<GPluginType>      | Empty         |
    | newsletter | Apply newsletter preset | boolean                 | false         |
    | webpage    | Apply webpage preset    | boolean                 | false         | 

* This package does not include CSS, so you have to import css from `grapesjs` package manually.

    ```javascript
    import 'grapesjs/dist/css/grapes.min.css';
    ```
 
