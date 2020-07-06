import React from 'react';
import './MJMLEditor.scss';
import Editor from '../../Editor/Editor';
import {withSampleCode} from '../with-sample-code';

function MJMLEditor() {
  return (
    <>
      <Editor id="test" presetType="mjml"/>
    </>
  );
}

MJMLEditor.toString = function () {
  return 'function MJMLEditor() {\n' +
    '  return (\n' +
    '    <>\n' +
    '      <Editor id="test" presetType="mjml"/>\n' +
    '    </>\n' +
    '  );\n' +
    '}';
};

export default withSampleCode(MJMLEditor);
