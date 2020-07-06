import React from 'react';
import './WebPageEditor.scss';
import Editor from '../../Editor/Editor';
import {withSampleCode} from '../with-sample-code';

function WebPageEditor() {
  return (
    <>
      <Editor id="test" presetType="webpage"/>
    </>
  );
}

WebPageEditor.toString = function () {
  return 'function WebPageEditor() {\n' +
    '  return (\n' +
    '    <>\n' +
    '      <Editor id="test" presetType="webpage"/>\n' +
    '    </>\n' +
    '  );\n' +
    '}';
};

export default withSampleCode(WebPageEditor);
