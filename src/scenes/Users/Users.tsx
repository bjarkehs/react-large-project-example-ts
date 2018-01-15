import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { getUsers } from '@services/users/actions';

import UsersOverview from './scenes/UsersOverview';
import UserDetails from './scenes/UserDetails';

type Props = RouteComponentProps<{}> & DispatchProp<{}>;

class Users extends React.Component<Props> {
  componentDidMount() {
    if (this.props.dispatch) {
      this.props.dispatch(getUsers());
    }
  }

  render() {
    const { match } = this.props;

    return (
      <>
        <h2>User overview</h2>
        <Switch>
          <Route exact={true} path={match.url} component={UsersOverview} />
          <Route path={match.url + '/:id'} component={UserDetails} />
        </Switch>
      </>
    );
  }
}

export const UsersWithoutHOC = Users;
export default connect()(Users);
