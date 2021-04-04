import React from 'react';
import { render } from '@testing-library/react';

import GrapesjsReact from './grapesjs-react';

describe('GrapesjsReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrapesjsReact />);
    expect(baseElement).toBeTruthy();
  });
});
