import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GBlock, GEditor } from 'grapesjs-react';
import React from 'react';

class SimpleBlock extends GBlock {

  public content = `<div class="simple-block"> This is a simple block </div>`;

  constructor() {
    super('simple-block', 'Simple Block');
  }
}

function CustomBlock() {
  return (
    <div className="container-fluid">
      <div>
        <GEditor id="geditor" newsletter={true} blocks={[new SimpleBlock()]}/>
      </div>
    </div>
  );
}

export default CustomBlock;
