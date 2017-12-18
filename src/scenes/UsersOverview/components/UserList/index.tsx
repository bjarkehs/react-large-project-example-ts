import * as React from 'react';

interface Person {
  name: string;
}

class UserList extends React.Component {
  usersData: Person[] = [
    { name: 'Jakob' },
    { name: 'Bjarke' }
  ];

  users() {
    return this.usersData.map((user: Person) =>
      (
        <div key={user.name}>
          {user.name}
        </div>
      )
    );
  }

  render() {
    return (
      <div>
        <h3>
          User list
        </h3>
        {this.users()}
      </div>
    );
  }
}

export default UserList;
