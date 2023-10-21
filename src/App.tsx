import { useState } from 'react';

import './App.css';
import './web-components/UserCard';
import { TUser, TOTAL_USERS, useQueryUsers } from './hooks/useQueryUsers';
import { getFullName } from './utils/getFullName.ts';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
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
  const [user, setUser] = useState<TUser>();

  const { loading, users } = useQueryUsers(setUser);

  const onChangeUser = () => {
    // @ts-ignore
    const { id } = user;
    const person = users?.[id];

    /* Сделал такое вычесление, так как со стороны mock fetch api, нет поля age */
    const age = 10 * id;

    setUser({
      age,
      id: person.id,
      fullName: getFullName(person.first_name, person.last_name),
      avatarURL: person.avatar,
    });
  };

  return (
    <>

      <div>
        <pre>user: {JSON.stringify(user)}</pre>
      </div>

      {
        loading ? <h5>Loading ... </h5> : <user-card
          data-name={user?.fullName}
          data-age={user?.age}
          data-avatar-url={user?.avatarURL}
        />
      }

      <button disabled={user?.id === TOTAL_USERS} onClick={onChangeUser}>change user data</button>
    </>
  );
}

export default App;
