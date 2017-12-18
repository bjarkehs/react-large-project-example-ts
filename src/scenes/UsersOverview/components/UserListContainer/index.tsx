import * as React from 'react';
import { User } from 'data/users/model';
import { connect } from 'react-redux';
import { getUsers, Actions } from 'data/users/actions';
import { getAllUsers, State as UserState } from 'data/users/reducer';
import UserList from './components/UserList';
import { Dispatch } from 'redux';

interface StateProps {
  users: User[];
}

interface DispatchProps {
  getUsers: () => void;
}

class UserListContainer extends React.Component<
  StateProps & DispatchProps,
  {}
> {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return <UserList users={this.props.users} />;
  }
}

const mapStateToProps = ({
  data: { users }
}: {
  data: { users: UserState };
}) => ({
  users: getAllUsers(users)
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
