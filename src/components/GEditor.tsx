import GBlock from 'components/GBlock';
import GrapesJS from 'grapesjs';
import gjsBasicBlocks from 'grapesjs-blocks-basic';
import gjsPresetNewsletter from 'grapesjs-preset-newsletter';
// Presets and Plugins
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import React, { useEffect, useState } from 'react';
import { GrapesPluginType, IStorageManager, IStyleManager } from 'types/grapes';
// Components
import GComponent from './GComponent';

interface IProps {
  id: string;
  // Preset and plugin options
  webpage: boolean;
  newsletter: boolean;
  plugins: GrapesPluginType[];
  // Components
  components: GComponent[];
  blocks: GBlock[];
  // Editor configurations
  storageManager: IStorageManager;
  blockManager: {};
  styleManager: IStyleManager;
}

function GEditor(props: IProps) {
  const {
    id = 'grapesjs-react-editor',
    storageManager,
    blockManager,
    components,
    blocks,
    webpage,
    newsletter
  } = props;

  const [editor, setEditor] = useState(null);

  useEffect(() => {
      if (!editor) {

        let plugins = [
          gjsBasicBlocks,
          ...props.plugins
        ];
        if (webpage) {
          plugins = [...plugins, gjsPresetWebpage];
        }
        if (newsletter) {
          plugins = [...plugins, gjsPresetNewsletter];
        }

        const e = GrapesJS.init({
          blockManager,
          container: `#${id}`,
          fromElement: true,
          plugins,
          storageManager
        });

        const defaultType = e.DomComponents.getType('default');
        const defaultModel = defaultType.model;
        const defaultView = defaultType.view;
        components.forEach((component: GComponent) => {
          e.DomComponents.addType(component.type, {
            model: defaultModel.extend(
              {
                defaults: Object.assign({}, defaultModel.prototype.defaults)
              },
              {
                isComponent: component.isComponent.bind(this)
              }
            ),
            view: defaultView.extend({
              events: {
                ...component.events,
              },
              render: component.render.bind(this)
            })
          });
        });
        blocks.forEach((block: GBlock) => {
          e.BlockManager.add(block.id, block);
        });
        setEditor(e);
      } else {
        if (document) {
          document.getElementById(id).append(editor.render());
        }
      }

      return function cleanup() {
        if (editor) {
          editor.destroy();
          GrapesJS.editors = GrapesJS.editors.filter((e) => e !== editor);
        }
      };
    },
    []
  );

  return <div id={id}/>;
}

GEditor.defaultProps = {
  blockManager: {},
  blocks: [],
  components: [],
  newsletter: false,
  plugins: [],
  storageManager: {},
  styleManager: {},
  webpage: false,
};

export default GEditor;

(window as any).GrapesJS = GrapesJS;
(window as any).grapesjs = GrapesJS;
