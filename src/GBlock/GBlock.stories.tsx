import {storiesOf} from '@storybook/react';
import React from 'react';
import GEditor from '../GEditor';
import GBlock from './GBlock';

class SimpleBlock extends GBlock {

  public content = `<div class="simple-block"> This is a simple block </div>`;

  constructor() {
    super('simple-block', 'Simple Block');
  }
}

storiesOf('GBlock', module)
  .add('simple-block', () => (
    <div className="container-fluid">
      <div>
        <GEditor
          id="grapesjs-react-editor"
          newsletter={true}
          blocks={[
            new SimpleBlock(),
          ]}
        />
      </div>
    </div>
  ));
