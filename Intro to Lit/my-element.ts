import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  mensaje: string = 'Hola buenas tardes';

  render() {
    return html`
      <p>${this.mensaje}</p>
    `;
  }
}