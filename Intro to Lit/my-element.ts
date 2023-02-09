import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('name-tag')
export class NameTag extends LitElement {
  @property()
  name: string = 'Escribe tu nombre';

  render() {
    return html`
      <p>Hola, ${this.name}</p>
      <input @input=${this.changeName} placeholder="Escribir nombre">
    `;
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
}