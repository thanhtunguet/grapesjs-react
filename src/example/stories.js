// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import EditorMounting from './EditorMounting';
import CustomBlock from './CustomBlock';
import 'grapesjs/dist/css/grapes.min.css';

storiesOf('GrapesJS React', module)
  .add('mounting', () => (
    <EditorMounting/>
  ))
  .add('custom-block', () => (
    <CustomBlock/>
  ));
