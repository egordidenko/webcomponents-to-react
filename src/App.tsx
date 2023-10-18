import { useState } from 'react';

import './App.css';
import './components/web-components/UserCard';
import { TUser, TOTAL_USERS, useQueryUsers } from './hooks/useQueryUsers';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'user-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}


function App() {
  const [user, setUser] = useState<TUser & { firstName?: string } | undefined>();

  const { loading, users } = useQueryUsers(setUser);

  const onChangeUser = () => {
    const { id } = user ?? {};
    const person = users?.[id];

    /* Сделал такое вычесление, так как со стороны mock fetch api, нет поля age */
    const age = 10 * id;

    setUser({
      age,
      id: person.id,
      firstName: person.first_name,
      avatar: person.avatar,
    });
  };


  return (
    <>

      <div>
        <pre>user: {JSON.stringify(user)}</pre>
      </div>

      {
        loading ? <h5>Loading ... </h5> : <user-card
          data-user={JSON.stringify(user)}
        />
      }

      <button disabled={user?.id === TOTAL_USERS} onClick={onChangeUser}>change user data</button>
    </>
  );
}

export default App;
