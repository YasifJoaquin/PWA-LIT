import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('word-viewer')
class WordViewer extends LitElement {
  @property() words = 'valor inicial';

  render() {
    return html`<pre>${this.words}</pre>`
  }
}