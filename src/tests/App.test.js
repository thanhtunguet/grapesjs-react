// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import EditorMounting from '../example/EditorMounting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditorMounting/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
