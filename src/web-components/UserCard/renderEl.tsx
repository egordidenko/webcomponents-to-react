import ReactDOM from 'react-dom/client';

import { UserCardReact, TProps } from '../../components/UserCardReact';

const USER_CARD_BY_ID = 'user-card-root';

const userCardRoot = ReactDOM.createRoot(document.getElementById(USER_CARD_BY_ID));

export const renderEl = (props: TProps) => {
  userCardRoot.render(<UserCardReact {...props} />);
};
