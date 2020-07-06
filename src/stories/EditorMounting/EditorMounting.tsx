import React from 'react';
import './EditorMounting.scss';
import Editor from '../../Editor/Editor';
import Button from 'antd/lib/button';
import {message} from 'antd';
import {withSampleCode} from '../with-sample-code';

message.config({
  maxCount: 1,
});

function EditorMounting() {
  const [mountState, setMountState] = React.useState<boolean>(true);

  const handleToggleEditor = React.useCallback(
    () => {
      setMountState(!mountState);
    },
    [mountState],
  );

  const handleEditorInit = React.useCallback(
    () => {
      message.info('Editor mounted');
    },
    [],
  );

  const handleEditorDestroy = React.useCallback(
    () => {
      message.warning('Editor destroyed');
    },
    [],
  );

  return (
    <>
      <Button type="primary" className="mb-2" onClick={handleToggleEditor}>
        {mountState ? 'Unmount' : 'Mount'}
      </Button>
      {mountState && (
        <Editor id="test"
                presetType="webpage"
                onInit={handleEditorInit}
                onDestroy={handleEditorDestroy}
        />
      )}
    </>
  );
}

EditorMounting.toString = function () {
  return 'function EditorMounting() {\n' +
    '  const [mountState, setMountState] = React.useState<boolean>(true);\n' +
    '\n' +
    '  const handleToggleEditor = React.useCallback(\n' +
    '    () => {\n' +
    '      setMountState(!mountState);\n' +
    '    },\n' +
    '    [mountState],\n' +
    '  );\n' +
    '\n' +
    '  const handleEditorInit = React.useCallback(\n' +
    '    () => {\n' +
    '      message.info(\'Editor mounted\');\n' +
    '    },\n' +
    '    [],\n' +
    '  );\n' +
    '\n' +
    '  const handleEditorDestroy = React.useCallback(\n' +
    '    () => {\n' +
    '      message.warning(\'Editor destroyed\');\n' +
    '    },\n' +
    '    [],\n' +
    '  );\n' +
    '\n' +
    '  return (\n' +
    '    <>\n' +
    '      <Button type="primary" className="mb-2" onClick={handleToggleEditor}>\n' +
    '        {mountState ? \'Unmount\' : \'Mount\'}\n' +
    '      </Button>\n' +
    '      {mountState && (\n' +
    '        <Editor id="test"\n' +
    '                presetType="webpage"\n' +
    '                onInit={handleEditorInit}\n' +
    '                onDestroy={handleEditorDestroy}\n' +
    '        />\n' +
    '      )}\n' +
    '    </>\n' +
    '  );\n' +
    '}';
};

export default withSampleCode(EditorMounting);
