import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('mi-elemento')
export class MyElement extends LitElement {
  render() {
    return html`
      <p>Hola a todos! Desde "mi-elemento".</p>
    `;
  }
}