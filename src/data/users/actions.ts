import * as api from './api';
import { Dispatch } from 'react-redux';

import { User } from './model';

export const GET_ALL = 'data/users/getAll';
type GET_ALL = typeof GET_ALL;

interface GetAll {
  type: GET_ALL;
  payload: User[];
}

type Actions = GetAll;

interface Data {
  users: User[];
}

export const getUsers = () => (dispatch: Dispatch<Actions>) => {
  dispatch({
    type: 'hokuspokus',
    payload: 'test'
  });

  api.getUsers().then((data: Data) => {
    dispatch({
      type: GET_ALL,
      payload: data.users
    });
  });
};
