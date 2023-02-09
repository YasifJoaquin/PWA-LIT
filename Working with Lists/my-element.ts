import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  names = ['Yasif', 'Carla', 'Yair', 'Joel', 'Yamir', 'Ana'];

  render() {
    return html`
      <p>Lista de nombres que tengan la letra "Y"</p>
      <ul>
      ${this.names
        .filter((name) => name.match(/y/i))
        .map((name) => html`<li>${name}</li>`)}
      </ul>
    `;
  }
}