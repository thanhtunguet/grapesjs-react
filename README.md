GrapesJS React Integration
==========================
_The first integration of GrapesJS for React._

1. Installation

    ```bash
    yarn add grapesjs-react
    ```

2. Usage

    ```javascript
    import React, {Component} from 'react';
    import GEditor from 'grapesjs-react';

    class GEditorExample extends Component {
     render() {
       return (
         <GEditor/>
         );
       }
    }

    export default GEditorExample;
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
* If the peer package is not installed, run the command below:

    ```bash
    yarn add grapesjs
    ```
