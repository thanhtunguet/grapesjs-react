// @flow

import { storiesOf } from '@storybook/react';
import 'codemirror/theme/monokai.css';
import 'grapesjs/dist/css/grapes.min.css';
import React, { Fragment } from 'react';
import CustomBlock from './CustomBlock';
import EditorMounting from './EditorMounting';

storiesOf('GrapesJS React', module)
  .add('mounting', () => (
    <Fragment>
      <EditorMounting/>
    </Fragment>
  ))
  .add('custom-block', () => (
    <Fragment>
      <CustomBlock/>
    </Fragment>
  ));
