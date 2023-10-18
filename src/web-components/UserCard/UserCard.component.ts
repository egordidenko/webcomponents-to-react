import { toJSONParse } from '../helpers/toJSONParse.ts';
import { renderEl } from './renderEl.tsx';


export class UserCard extends HTMLElement {
  // @ts-ignore
  private _mountElOfDOM: HTMLElement | null;

  constructor() {
    super();
  }

  connectedCallback() {
    this._mountElOfDOM = document.getElementById('user-card-root');
    this.render();
  }

  static get observedAttributes() {
    return ['data-user'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const user = this.getAttribute('data-user');
    const props = toJSONParse(user);

    renderEl(this._mountElOfDOM, props);
  }
}

customElements.define('user-card', UserCard);
