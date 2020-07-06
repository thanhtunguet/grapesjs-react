import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';

import NewsletterEditor from './NewsletterEditor';

describe('NewsletterEditor', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NewsletterEditor/>
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
