import {storiesOf} from '@storybook/react';
import Button from 'antd/lib/button';
import * as React from 'react';
import Editor from './Editor';

storiesOf('Editor', module)
  .add('Default', function Default() {
    return (
      <>
        <Editor>
          <div> Default editor content, drag some elements here!</div>
        </Editor>
      </>
    );
  })
  .add('Mounting', function Mounting() {
    const [mount, setMountState] = React.useState<boolean>(false);

    function handleMountEditor() {
      setMountState(!mount);
    }

    return (
      <>
        <div className="mb-2">
          <Button htmlType="button" type="primary" onClick={handleMountEditor}>
            {mount ? 'Unmount' : 'Mount'}
          </Button>
        </div>
        {mount && (
          <Editor/>
        )}
      </>
    );
  });
