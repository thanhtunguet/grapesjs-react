// @flow

import React from 'react';
import GrapesJS from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import gjsPresetNewsletter from 'grapesjs-preset-newsletter';
import gjsCustomCode from 'grapesjs-custom-code';
import gjsForms from 'grapesjs-plugin-forms';
import GComponent from './GComponent';
import type {GrapesPluginType} from 'types/grapes';

const {Component} = React;

type Props = {
  components: Array<GComponent>,
  plugins: Array<GrapesPluginType>,
  // Preset and plugin options
  webpage: boolean,
  newsletter: boolean,
  forms: boolean,
  ckeditor: boolean,
  customCode: boolean,
  // Editor configurations
  storageManager: {},
  blockManager: {},
}

type State = {}

class GEditor extends Component<Props, State> {
  /**
   * Component default props
   *
   * @type {Props}
   */
  static defaultProps: Props = {
    components: [],
    plugins: [],
    // Presets and plugins
    webpage: false,
    newsletter: true,
    forms: true,
    ckeditor: false,
    customCode: true,
    // Configurations
    storageManager: {},
    blockManager: {}
  };

  /**
   * Editor container
   *
   * @type {null|HTMLElement}
   */
  static container: HTMLElement = null;

  /**
   * Get editor instance
   *
   * @returns {*|null}
   */
  static getEditor: Function = () => GrapesJS.editors[0] || null;

  /**
   * Editor container id
   *
   * @type {string}
   */
  id: string = `gjs-react-editor`;

  /**
   * Editor container id
   *
   * @type {string}
   */
  containerId: string = `grapesjs-react-editor-container`;

  renderEditor: Function = () => {
    if (this.rendered()) {
      this.componentContainer.appendChild(GEditor.container);
    } else {
      this.initEditor();
    }
    GEditor.getEditor().render();
  };

  rendered: Function = (): boolean => !!GEditor.container;

  getContainer: Function = (): HTMLElement => {
    if (GEditor.container) {
      return GEditor.container;
    }
    return document.getElementById(this.containerId);
  };

  /**
   * Initialize new editor with configurations from props
   */
  initEditor: Function = () => {
    const {containerId} = this;
    const {plugins, webpage, newsletter, forms, customCode, storageManager, blockManager} = this.props;
    // Add preset
    if (webpage) {
      plugins.push(gjsPresetWebpage);
    }
    if (newsletter) {
      plugins.push(gjsPresetNewsletter);
    }
    // Add plugins
    if (forms) {
      plugins.push(gjsForms);
    }
    if (customCode) {
      plugins.push(gjsCustomCode);
    }
    GrapesJS.init({
      fromElement: true,
      autorender: false,
      container: `#${containerId}`,
      plugins,
      storageManager,
      blockManager
    });
    GEditor.container = this.getContainer();
  };

  componentDidMount() {
    this.renderEditor();
  }

  render() {
    const {id, containerId} = this;
    return (
      <div id={id} ref={(div: HTMLElement) => {
        this.componentContainer = div;
      }}>
        {(!this.rendered()) ? (<div id={containerId}/>) : (null)}
      </div>
    );
  }
}

// window global variables
window.grapesjs = window.GrapesJS = GrapesJS;
window.GEditor = GEditor;

export default GEditor;
