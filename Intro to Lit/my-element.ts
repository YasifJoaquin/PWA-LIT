import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('more-expressions')
export class MoreExpressions extends LitElement {
  @property()
  checked: boolean = false;

  render() {
    return html`
      <div>
        <input type="text" ?disabled=${!this.checked} value="Textbot activado.">
      </div>
      <label><input type="checkbox" @change=${this.setChecked}> Activar Textbox</label>
    `;
  }

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
  }
}