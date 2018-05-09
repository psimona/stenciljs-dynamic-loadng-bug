/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface MyComponentA {
      'first': string;
      'last': string;
    }
  }

  interface HTMLMyComponentAElement extends StencilComponents.MyComponentA, HTMLStencilElement {}

  var HTMLMyComponentAElement: {
    prototype: HTMLMyComponentAElement;
    new (): HTMLMyComponentAElement;
  };
  interface HTMLElementTagNameMap {
    'my-component-a': HTMLMyComponentAElement;
  }
  interface ElementTagNameMap {
    'my-component-a': HTMLMyComponentAElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-component-a': JSXElements.MyComponentAAttributes;
    }
  }
  namespace JSXElements {
    export interface MyComponentAAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
