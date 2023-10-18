import { useEffect, useState } from 'react';
import { getUsers } from '../api/users.ts';

export type TUser = {
  avatar?: string;
  email?: string;
  first_name?: string;
  id: number;
  last_name?: string;
  age?: number
}

export const TOTAL_USERS = 6;

export const useQueryUsers = (addUser: (user: TUser) => void) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getUsers()
      .then((response) => response.json())
      .then((actualData) => {
        setUsers(actualData?.data);
        const [person] = actualData?.data as TUser[];

        addUser({
          id: person.id,
          first_name: person.first_name,
          avatar: person.avatar,
          age: 19,
        });
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  return {
    loading,
    users,
    countUsers: users.length,
  };
};
