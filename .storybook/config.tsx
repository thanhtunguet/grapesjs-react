import {addDecorator, configure} from '@storybook/react';
import Card from 'antd/lib/card';
import * as React from 'react';
import './style.scss';

// automatically import all files ending in GrapesJS.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

addDecorator((storyFn) => (
  <Card>
    {storyFn()}
  </Card>
));

function loadStories() {
  req.keys()
    .forEach(req);
}

configure(loadStories, module);
