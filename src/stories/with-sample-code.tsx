import React, {ComponentType} from 'react';
import {UnControlled as ReactCodeMirror} from 'react-codemirror2';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript';
import './with-sample-code.scss';

export function withSampleCode(Component: ComponentType) {
  const sampleCode: string = Component.toString();

  return function () {
    return (
      <div className="sample-code-container">
        <div className="sample-code">
          <ReactCodeMirror
            value={sampleCode}
            options={{
              mode: 'text/javascript',
              theme: 'monokai',
              lineNumbers: true,
            }}
          />
        </div>
        <div className="demo">
          <Component/>
        </div>
      </div>
    );
  };
}
