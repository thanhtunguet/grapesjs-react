import React from 'react';
import './NewsletterEditor.scss';
import {withSampleCode} from '../with-sample-code';
import Editor from '../../Editor/Editor';

function NewsletterEditor() {
  return (
    <>
      <Editor id="test" presetType="newsletter"/>
    </>
  );
}

NewsletterEditor.toString = function () {
  return 'function NewsletterEditor() {\n' +
    '  return (\n' +
    '    <>\n' +
    '      <Editor id="test" presetType="newsletter"/>\n' +
    '    </>\n' +
    '  );\n' +
    '}';
};

export default withSampleCode(NewsletterEditor);
