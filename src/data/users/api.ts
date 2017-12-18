import { User } from './model';

interface Data {
  users: User[];
}

export const getUsers = () => {
  const userData = new Promise<Data>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        users: [{ name: 'Jakob' }, { name: 'Bjarke' }]
      });
    }, 250);
  });

  return userData;
};
