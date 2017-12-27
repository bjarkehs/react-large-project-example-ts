import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import UserContainer from './components/UserContainer';

interface Params {
  id: string;
}

type Props = RouteComponentProps<Params>;

const UserDetails = (props: Props) => (
  <UserContainer userId={props.match.params.id} />
);

export default UserDetails;
