// @flow

import React, {useEffect} from 'react';
import GrapesJS from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import gjsPresetNewsletter from 'grapesjs-preset-newsletter';
import gjsBasicBlocks from 'grapesjs-blocks-basic';
import GComponent from 'components/GComponent';
import type {GrapesPluginType} from 'types/grapes';

type PropsType = {
  id: string,
  // Preset and plugin options
  webpage: boolean,
  newsletter: boolean,
  plugins: Array<GrapesPluginType>,
  // Components
  components: Array<GComponent>,
  // Editor configurations
  storageManager: {},
  blockManager: {}
};

function GEditor(props: PropsType) {
  if (!props.id) {
    throw new Error('Editor id prop is required');
  }
  useEffect(() => {
    let editor = GrapesJS.editors.find((e: Object) => e.getContainer().id === props.id);
    if (!editor) {
      let plugins = [
        gjsBasicBlocks,
        ...props.plugins,
      ];
      if (props.webpage) {
        plugins = [
          ...plugins,
          gjsPresetWebpage,
        ];
      }
      if (props.newsletter) {
        plugins = [
          ...plugins,
          gjsPresetNewsletter,
        ];
      }
      editor = GrapesJS.init({
        fromElement: true,
        container: `#${props.id}`,
        plugins,
        storageManager: props.storageManager,
        blockManager: props.blockManager,
      });
      const defaultType = editor.DomComponents.getType('default');
      const defaultModel = defaultType.model;
      const defaultView = defaultType.view;
      props.components.forEach((component: GComponent) => {
        editor.DomComponents.addType(component.type, {
          model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {

            }),
          }, {
            isComponent: component.isComponent.bind(this),
          }),
          view: defaultView.extend({
            events: component.events,
            render: component.render.bind(this),
          }),
        });
      });
    }
    document.getElementById(props.id).append(editor.render());
    console.log('Rerender');
    return function () {
      editor.destroy();
    };
  });
  return (
    <div id={props.id}/>
  );
}

GEditor.defaultProps = {
  webpage: false,
  newsletter: false,
  plugins: [],
  components: [],
  storageManager: {},
  blockManager: {},
};

export default GEditor;

window.grapesjs = GrapesJS;
