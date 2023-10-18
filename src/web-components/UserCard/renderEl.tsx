import ReactDOM from 'react-dom/client';

import { UserCardReact, TProps } from '../../components/UserCardReact';

export const renderEl = (elOfNode: HTMLElement | null, props: TProps) => {
  if (elOfNode === null) return;

  ReactDOM.createRoot(elOfNode).render(<UserCardReact {...props} />);
};
