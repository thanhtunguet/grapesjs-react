// @flow

import React, {useState} from 'react';
import GEditor from 'components/GEditor';
import 'antd/dist/antd.min.css';
import {Tabs} from 'antd';

const {TabPane} = Tabs;

function App() {
  const [count, setCount] = useState('1');
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        <GEditor id="geditor" newsletter/>
        <div>
          {count}
          <button onClick={() => {
            setCount(count + 1);
          }}>
            Plus
          </button>
        </div>
      </TabPane>
      <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
      <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
    </Tabs>
  );
}

export default App;
