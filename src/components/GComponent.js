// @flow

import { errorHandler } from 'helpers';

class GComponent {
  /**
   * Component type
   *
   * @type {string}
   */
  type: string;
  /**
   * Component events
   *
   * @type {Object}
   */
  events = {};

  /**
   * Component constructor
   * @param type {string}
   */
  constructor(type: string) {
    this.type = type;
  }

  /**
   * isComponent method
   *
   * This method requires implementation
   */
  isComponent: Function = () => {
    return errorHandler.methodRequiresImplementation('isComponent');
  };

  /**
   * render method
   *
   * This method requires implementation
   */
  render: Function = () => {
    return errorHandler.methodRequiresImplementation('render');
  };
}

export default GComponent;
