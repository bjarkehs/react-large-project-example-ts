import * as React from 'react';
import { User } from 'services/users/models';
import { connect } from 'react-redux';
import { getAllUsers, State as UserState } from 'services/users/reducer';

import UserList from './components/UserList';
import MatTest from '../MatTest';

interface Props {
  // Own props

  // StateProps
  users: User[];
}

class UserListContainer extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <UserList users={this.props.users} />
        <MatTest displayText={'Bøh'} />
      </div>
    );
  }
}

const mapStateToProps = ({
  data: { users }
}: {
  data: { users: UserState };
}) => ({
  users: getAllUsers(users)
});

export default connect(mapStateToProps)(UserListContainer);
