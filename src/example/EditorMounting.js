// @flow

import React, { useState } from 'react';
import GEditor from 'components/GEditor';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';

function EditorMounting() {
  const [mounted, setMounted] = useState(true);

  function handleMounting() {
    setMounted(!mounted);
  }

  return (
    <div className="container">
      <div className="py-2">
        <Button htmlType="button" type="primary" onClick={handleMounting}>
          {mounted ? 'Unmount' : 'Mount'}
        </Button>
      </div>
      <div>
        {mounted && (
          <GEditor id="geditor" newsletter/>
        )}
      </div>
    </div>
  );
}

export default EditorMounting;
