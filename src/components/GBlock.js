// @flow

import type { BlockContentType } from 'types/grapes';

/**
 * Custom block class
 */
class GBlock {
  /**
   * Block Id
   *
   * @type {string}
   */
  id: string;

  /**
   * Block label
   *
   * @type {string}
   */
  label: string;

  /**
   * Block content
   *
   * @type {BlockContentType}
   */
  content: BlockContentType;

  /**
   * Block component
   *
   * @type {Object}
   */
  component: Object;

  /**
   * Block attributes
   *
   * @types {Object}
   */
  attributes: Object;

  /**
   * Block constructor
   *
   * @param id {string}
   * @param label {string}
   */
  constructor(id: string, label: string) {
    this.setId(id);
    this.setLabel(label);
  }

  /**
   * Block id setter
   *
   * @param id {string}
   */
  setId: Function = (id: string) => {
    this.id = id;
  };

  /**
   * Block label setter
   *
   * @param label {string}
   */
  setLabel: Function = (label: string) => {
    this.label = label;
  };
}

export default GBlock;
