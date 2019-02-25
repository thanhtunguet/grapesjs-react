// @flow

export type GrapesPluginType = string | Function;

export type BlockContentType = string | HTMLElement;

export type ComponentAttributesType = {
  badgable: boolean,
  draggable: boolean,
  droppable: boolean,
  editable: boolean,
  content: string,
  component: Object,
  'custom-name': string,
  highlightable: boolean,
  icon: string,
  layerable: boolean,
  open: boolean,
  removable: boolean,
  resizable: boolean,
  script: string
};
