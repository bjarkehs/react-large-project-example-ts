import * as api from './api';
import { Dispatch } from 'react-redux';

import { User } from './models';

export const GET_ALL_REQUEST = 'services/users/getAllRequest';
export type GET_ALL_REQUEST = typeof GET_ALL_REQUEST;
export const GET_ALL_SUCCESS = 'services/users/getAllSuccess';
export type GET_ALL_SUCCESS = typeof GET_ALL_SUCCESS;
export const GET_ALL_FAILURE = 'services/users/getAllFailure';
export type GET_ALL_FAILURE = typeof GET_ALL_FAILURE;

export type Actions =
  | {
      type: GET_ALL_REQUEST;
    }
  | {
      type: GET_ALL_SUCCESS;
      payload: User[];
    }
  | {
      type: GET_ALL_FAILURE;
      error: {};
    };

export const getUsers = () => (dispatch: Dispatch<Actions>) => {
  dispatch<Actions>({
    type: GET_ALL_REQUEST
  });

  api
    .getUsers()
    .then(data => {
      dispatch<Actions>({
        type: GET_ALL_SUCCESS,
        payload: data.users
      });
    })
    .catch(error => {
      dispatch<Actions>({
        type: GET_ALL_FAILURE,
        error
      });
    });
};
