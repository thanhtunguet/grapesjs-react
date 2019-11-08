import React from 'react';
import ReactDOM from 'react-dom';

import GEditor from './GEditor';

describe('GEditor', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GEditor id="GrapesJS-Test"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
