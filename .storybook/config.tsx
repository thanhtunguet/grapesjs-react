import {addDecorator, configure} from '@storybook/react';
import 'antd/dist/antd.min.css';
import Card from 'antd/lib/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'codemirror/theme/monokai.css';
import 'grapesjs/dist/css/grapes.min.css';
import * as React from 'react';
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
