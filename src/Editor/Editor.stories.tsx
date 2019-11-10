import {storiesOf} from '@storybook/react';
import * as React from 'react';
import Editor from './Editor';

storiesOf('Editor', module)
  .add('Default', function Default() {
    return (
      <Editor/>
    );
  });
