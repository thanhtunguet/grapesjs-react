// @flow

import {BlockContentType} from '../types/grapes';

/**
 * Custom block class
 */
abstract class GBlock {
  /**
   * Block Id
   *
   * @type {string}
   */
  public id: string;

  /**
   * Block label
   *
   * @type {string}
   */
  public label: string;

  /**
   * Block content
   *
   * @type {BlockContentType}
   */
  public content: BlockContentType;

  /**
   * Block component
   *
   * @type {Object}
   */
  public component: {};

  /**
   * Block attributes
   *
   * @types {Object}
   */
  public attributes: {};

  /**
   * Block constructor
   *
   * @param id {string}
   * @param label {string}
   */
  protected constructor(id: string, label: string) {
    this.setId(id);
    this.setLabel(label);
  }

  /**
   * Block id setter
   *
   * @param id {string}
   */
  public setId = (id: string) => {
    this.id = id;
  }

  /**
   * Block label setter
   *
   * @param label {string}
   */
  public setLabel = (label: string) => {
    this.label = label;
  }
}

export default GBlock;
