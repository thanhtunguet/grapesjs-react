// @flow

import type {BlockContentType} from 'types/grapes';

class GBlock {
  id: string;

  label: string;

  content: BlockContentType;

  component: Object;

  setId: Function = (id: string) => {
    this.id = id;
  };

  setLabel: Function = (label: string) => {
    this.label = label;
  };

  constructor(id: string, label: string) {
    this.setId(id);
    this.setLabel(label);
  }
}

export default GBlock;
