import React from 'react';
import { GrapesjsReact } from './grapesjs-react';
import Button from 'antd/lib/button';

import 'grapesjs-preset-webpage';
import 'grapesjs-preset-newsletter';
import 'grapesjs-mjml';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'grapesjs/dist/css/grapes.min.css';

export default {
  component: GrapesjsReact,
  title: 'GrapesjsReact'
};

export const Primary = () => {
  return <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      'gjs-preset-webpage',
      'gjs-blocks-basic'
    ]}
  />;
};

export const Newsletter = () => {
  return <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      'gjs-preset-newsletter',
      'gjs-blocks-basic'
    ]}
  />;
};

export const MJML = () => {
  return <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      'grapesjs-mjml',
      'gjs-blocks-basic'
    ]}
  />;
};

export const ConditionallyRendering = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  const handleSwitchMountState = React.useCallback(() => {
    setMounted(!mounted);
  }, [mounted]);

  return (
    <>
      <Button type='primary' onClick={handleSwitchMountState} className='my-4'>
        {mounted ? 'Unmount' : 'Mount'}
      </Button>
      {mounted && (
        <GrapesjsReact id='grapesjs-react'
                       plugins={[
                         'gjs-preset-newsletter',
                         'gjs-blocks-basic'
                       ]} />
      )}
    </>
  );
};
