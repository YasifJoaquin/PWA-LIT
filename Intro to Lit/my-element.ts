import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  version = 'INICIO';

  render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>Este es el ${this.version} del Tutorial.</p>
    `;
  }
}