import {storiesOf} from '@storybook/react';
import Button from 'antd/lib/button';
import React, {useState} from 'react';
import GEditor from './GEditor';

storiesOf('GEditor', module)
  .add('mounting', () => {
    const [mounted, setMounted] = useState(true);

    const handleMounting = () => {
      setMounted(!mounted);
    };

    return (
      <div className="container-fluid">
        <div className="py-2">
          <Button htmlType="button" type="primary" onClick={handleMounting}>
            {mounted ? 'Unmount' : 'Mount'}
          </Button>
        </div>
        <div className="editor-container">
          {mounted && (
            <GEditor id="grapesjs-react-editor" newsletter={true}>
              <div>Drag some elements!</div>
            </GEditor>
          )}
        </div>
      </div>
    );
  });
