import * as React from 'react';
import { User } from 'data/users/model';

const UserList = ({ users }: { users: User[] }) => {
  return (
    <React.Fragment>
      <h3>User list</h3>
      {users.map((user: User) => <div key={user.name}>{user.name}</div>)}
    </React.Fragment>
  );
};

export default UserList;
