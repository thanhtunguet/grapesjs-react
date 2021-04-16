import React, {PropsWithChildren} from 'react';
import GrapesJS from 'grapesjs';

export interface GrapesjsReactProps {
  id: HTMLElement['id'];

  onInit?(editor?: GrapesJS.Editor): void;

  onDestroy?(): void;
}

export function GrapesjsReact(
  props: PropsWithChildren<GrapesjsReactProps> & Parameters<typeof GrapesJS.init>[0]
) {
  const {id, onInit, onDestroy, children, ...options} = props;

  const [editor, setEditor] = React.useState<GrapesJS.Editor>();

  React.useEffect(() => {
    const selector = `#${id}`;
    if (!editor) {
      const editor = GrapesJS.init({
        container: selector,
        fromElement: !!children,
        ...options
      });
      setEditor(editor);
      if (typeof onInit === 'function') {
        onInit(editor);
      }
    }
  }, [children, editor, id, onInit, options]);

  React.useEffect(() => {
    return function cleanup() {
      if (editor) {
        if (typeof onDestroy === 'function') {
          onDestroy();
        }
        const index: number = GrapesJS.editors.findIndex((e) => e.Config.container === editor.Config.container);
        if (typeof index === 'number' && index >= 0) {
          GrapesJS.editors.splice(index, 1);
        }
        editor.destroy();
      }
    }
  }, [editor, onDestroy]);

  return (
    <div id={id}>
      {children}
    </div>
  );
}

export default GrapesjsReact;
