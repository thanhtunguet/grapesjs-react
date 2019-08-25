// @flow

import 'antd/dist/antd.min.css';
import Button from 'antd/lib/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import GEditor from '../components/GEditor';

function EditorMounting() {
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
      <div>{mounted && <GEditor id="geditor" newsletter={true}/>}</div>
    </div>
  );
}

export default EditorMounting;
