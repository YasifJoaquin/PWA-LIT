import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  things = [
    "Leer",
    "Ver Youtube",
    "Aprender cosas nuevas de programacion",
    "Dormir",
  ];

  render() {
    return html`
      <p>Cosas que me gusta hacer: </p>
      <ul>
        ${map(
          this.things,
          (thing, index) => html`
            <li>
              ${thing}
              <button @click=${() => this._deleteThing(index)}>Delete</button>
            </li>
          `
        )}
      </ul>
    `;
  }

  private _deleteThing(index: number) {
    this.things = this.things.filter((_, i) => i !== index);
  }
}