import { toJSONParse } from '../helpers/toJSONParse.ts';
import { renderEl } from './renderEl.tsx';


export class UserCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
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

    renderEl(props);
  }
}

customElements.define('user-card', UserCard);
