import React from 'react';
import { createRoot } from 'react-dom/client';
import { UserCardReact, TProps as TUser } from '../../components/UserCardReact';
import styled from '../../components/UserCardReact/UserCard.styled.css';

const DEFAULT_USER_PICTURE_URL = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png';

export class UserCard extends HTMLElement {
  // @ts-ignore
  private readonly _root: React.Root | null;
  private readonly _shadowRoot: ShadowRoot | null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._shadowRoot = this.shadowRoot;
    this._root = createRoot(this._shadowRoot!); // createRoot(container!) if you use TypeScript
  }

  connectedCallback() {
    const user = this._getPropsFromWebComponents();

    this._requireStyle();
    this._render(user);
  }


  static get observedAttributes() {
    return ['data-name', 'data-age', 'data-avatar-url'];
  }

  // @ts-ignore
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {

      const user = this._getPropsFromWebComponents();
      this._render(user);
    }
  }

  private _getPropsFromWebComponents() {
    const user: TUser = {
      fullName: this.getAttribute('data-name') || 'No Name',
      age: this.getAttribute('data-age') || 'No age',
      avatarURL: this.getAttribute('data-avatar-url') || DEFAULT_USER_PICTURE_URL,
    };

    return user;
  }

  private _requireStyle() {
    const style = document.createElement('style');

    style.textContent = styled;

    if (this._shadowRoot) {
      this._shadowRoot.appendChild(style);
    }
  }

  private _render(user: TUser) {
    if (this._root) {
      this._root.render(<UserCardReact {...user} />);
    }
  }
}

customElements.define('user-card', UserCard);
