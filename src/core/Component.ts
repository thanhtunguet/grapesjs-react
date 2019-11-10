import {IComponent} from 'grapesjs';

export class Component implements IComponent {
  public type: string;

  public events: Event[] = [];

  public model: any;

  public view: any;

  public isComponent(element: HTMLElement) {
    return !!element;
  }

  public render() {
    return `<div></div>`;
  }
}
