// @flow

import React from 'react';
import GrapesJS from 'grapesjs';
// Presets and Plugins
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import gjsPresetNewsletter from 'grapesjs-preset-newsletter';
import gjsBasicBlocks from 'grapesjs-blocks-basic';
// Components
import GComponent from './GComponent';
import GBlock from './GBlock';
import type { GrapesPluginType } from 'types/grapes';

const {
  useEffect,
  useState,
} = React;

type PropsType = {
  id: string,
  // Preset and plugin options
  webpage: boolean,
  newsletter: boolean,
  plugins: Array<GrapesPluginType>,
  // Components
  components: Array<GComponent>,
  blocks: Array<GBlock>,
  // Editor configurations
  storageManager: {},
  blockManager: {},
};

function GEditor(props: PropsType) {
  const {
    id = 'grapesjs-react-editor',
    storageManager,
    blockManager,
    components,
    blocks,
    webpage,
    newsletter,
  } = props;
  const [editor, setEditor] = useState(null);
  useEffect(
    () => {
      if (!editor) {
        let plugins = [
          gjsBasicBlocks,
          ...props.plugins,
        ];
        if (webpage) {
          plugins = [
            ...plugins,
            gjsPresetWebpage,
          ];
        }
        if (newsletter) {
          plugins = [
            ...plugins,
            gjsPresetNewsletter,
          ];
        }
        const editor = GrapesJS.init({
          fromElement: true,
          container: `#${id}`,
          plugins,
          storageManager: storageManager,
          blockManager: blockManager,
        });

        const defaultType = editor.DomComponents.getType('default');
        const defaultModel = defaultType.model;
        const defaultView = defaultType.view;
        components.forEach((component: GComponent) => {
          editor.DomComponents.addType(component.type,
            {
              model: defaultModel.extend(
                {
                  defaults: Object.assign({}, defaultModel.prototype.defaults),
                },
                {
                  isComponent: component.isComponent.bind(this),
                },
              ),
              view: defaultView.extend(
                {
                  events: component.events,
                  render: component.render.bind(this),
                },
              ),
            });
        });
        blocks.forEach((block: GBlock) => {
          editor.BlockManager.add(block.id, block);
        });
        setEditor(editor);
      } else {
        if (document) {
          document.getElementById(id).append(editor.render());
        }
      }
      return function cleanup() {
        if (editor) {
          // Destroy current editor
          editor.destroy();
        }
        // Remove editor from global GrapesJS store
        GrapesJS.editors = GrapesJS.editors.filter((e) => e !== editor);
      };
    },
    [],
  );

  return (
    <div id={id}/>
  );
}

GEditor.defaultProps = {
  webpage: false,
  newsletter: false,
  plugins: [],
  components: [],
  blocks: [],
  storageManager: {},
  blockManager: {},
};

export default GEditor;

window.grapesjs = window.GrapesJS = GrapesJS;
