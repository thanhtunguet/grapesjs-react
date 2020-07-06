import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';

import EditorMounting from './EditorMounting';

describe('EditorMounting', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <EditorMounting/>
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
