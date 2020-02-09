import {storiesOf} from '@storybook/react';
import Button from 'antd/lib/button';
import * as React from 'react';
import Editor from './Editor';

function Default() {
  return (
    <>
      <Editor>
        <div> Default editor content, drag some elements here!</div>
      </Editor>
    </>
  );
}

function Mounting() {
  const [mount, setMountState] = React.useState<boolean>(false);

  const handleMountEditor = React.useCallback(
    () => {
      setMountState(!mount);
    },
    [mount],
  );

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
}

storiesOf('Editor', module)
  .add('Default', Default)
  .add('Mounting', Mounting);
