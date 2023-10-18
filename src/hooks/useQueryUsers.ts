import { useEffect, useState } from 'react';
import { getUsers } from '../api/users.ts';
import { getFullName } from '../utils/getFullName.ts';
import { isObjectEmpty } from '../utils/isObjectEmpty.ts';
import { EHttpStatus } from '../constans/http.status.ts';

export type TUserRest = {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
}

export type TUser = Pick<TUserRest, 'id'> & {
  fullName: string
  age: string | number
  avatarURL: string
}

export const TOTAL_USERS = 6;

export const useQueryUsers = (addUser: (user: TUser) => void) => {
  const [users, setUsers] = useState<TUserRest[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const result = await getUsers();
      const response = await result.json();

      if (result.status === EHttpStatus.SUCCESS && !isObjectEmpty(response)) {
        setUsers(response?.data);
        const [person] = response?.data as TUserRest[];

        addUser({
          id: person.id,
          fullName: getFullName(person.first_name, person.last_name),
          avatarURL: person.avatar,
          age: 19,
        });

      }
    }

    fetchUsers()
      .finally(() => {
          setLoading(false);
        },
      );


  }, []);

  return {
    loading,
    users,
  };
};
