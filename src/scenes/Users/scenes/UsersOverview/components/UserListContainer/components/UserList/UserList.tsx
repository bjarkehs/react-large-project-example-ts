import * as React from 'react';
import { User } from 'services/users/model';
import { Link } from 'react-router-dom';

import './UserList.css';

interface UserListProps {
  users?: User[];
}

const UserList = ({ users = [] }: UserListProps) => {
  return (
    <div className="userlist">
      <h3 className="userlist__header">User list</h3>
      {users.map((user: User) => (
        <div key={user.name}>
          <Link to={'/users/' + user.id}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
