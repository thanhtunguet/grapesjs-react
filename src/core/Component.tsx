import {Component as GrapesJSComponent, Model, View} from 'grapesjs';
import React from 'react';

export class Component implements GrapesJSComponent {
  public type: string;

  public events: Event[] = [];

  public model: Model;

  public view: View;

  public isComponent(element: HTMLElement): boolean {
    throw new Error('`isComponent` must be implemented');
  }

  public render() {
    return (
      <div>
      </div>
    );
  }
}
