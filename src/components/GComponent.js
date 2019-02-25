// @flow

class GComponent {
  /**
   * Component type
   *
   * @type {string}
   */
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  events = {};

  isComponent: Function = () => {
    throw new Error('Method `isComponent` requires implementation');
  };

  render: Function = () => {
    throw new Error('Method `render` requires implementation');
  };
}

export default GComponent;
