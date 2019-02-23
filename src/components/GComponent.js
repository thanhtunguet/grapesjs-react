// @flow

import type {BlockContentType, ComponentAttributesType} from 'types/grapes';

class GComponent {
  type: string;

  attributes: ComponentAttributesType;

  constructor(type: string) {
    this.type = type;
  }

  isComponent: Function = (element: HTMLElement) => {
    throw new Error('Method `isComponent` requires implementation');
  };

  bindTo(editor) {
    editor.DomComponents.add(this.type, this);
  }

  render(): BlockContentType {
    throw new Error('Method `render` requires implementation');
  };
}

export default GComponent;
