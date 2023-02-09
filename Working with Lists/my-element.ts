import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  items = new Set(['Spiderman 2', 'Sherk', 'Split', 'Sputnik', 'Lost'])

  render() {
    return html`
      <p>Mi lista de peliculas: </p>
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}