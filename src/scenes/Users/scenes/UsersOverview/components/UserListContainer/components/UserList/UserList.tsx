import * as React from 'react';
import { User } from 'services/users/model';
import { Link } from 'react-router-dom';

interface UserListProps {
  users?: User[];
}

const UserList = ({ users = [] }: UserListProps) => {
  return (
    <>
      <h3>User list</h3>
      {users.map((user: User) => (
        <div key={user.name}>
          <Link to={'/users/' + user.id}>{user.name}</Link>
        </div>
      ))}
    </>
  );
};

export default UserList;
