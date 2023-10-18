import { toJSONParse } from '../helpers/toJSONParse.ts';


export class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

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
    const _user = toJSONParse(user);

    const template = `
      <style>
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .userCard {
          display: block;
          width: 280px;
        }
        
        .userCard__wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
        }
        
        .userCard__imageWrapper {
          width: 180px;
          height: 180px;
        }
        
        .userCard__image {
          border-radius: 50%;
        }
        
        .userCard__body {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      </style>
      <div class='userCard__wrapper'>
        <div class='userCard__imageWrapper'>
          <img class='userCard__image' loading='lazy' src='${_user?.avatar}' alt='User Avatar' /> 
        </div>
        
        <div class='userCard__body'>
          <h3 class='userCard__title'>Имя: ${_user?.firstName}</h3>
          <h4 class='userCard__subtitle'>Возраст: ${_user?.age}</h4>
        </div>
      </div>
      `;

    this.shadowRoot.innerHTML = template;
  }
}

customElements.define('user-card', UserCard);
