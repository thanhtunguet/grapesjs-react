// @flow

import {ErrorHelper} from 'helpers';

abstract class GComponent {
  /**
   * Component type
   *
   * @type {string}
   */
  public type: string;
  /**
   * Component events
   *
   * @type {Object}
   */
  public events: {
    [key: string]: Event,
  } = {};

  /**
   * Component constructor
   * @param type {string}
   */
  protected constructor(type: string) {
    this.type = type;
  }

  /**
   * isComponent method
   *
   * This method requires implementation
   */
  public abstract isComponent(element: Element): any;

  /**
   * render method
   *
   * This method requires implementation
   */
  public abstract render(): any;
}

export default GComponent;
