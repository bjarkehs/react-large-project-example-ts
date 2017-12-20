import { User } from './model';

interface Data {
  users: User[];
}

export const getUsers = () => {
  const userData = new Promise<Data>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        users: [{ id: '1', name: 'Jakob' }, { id: '2', name: 'Bjarke' }]
      });
    }, 250); // tslint:disable-line:align
  });

  return userData;
};
