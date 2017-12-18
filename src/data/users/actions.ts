import * as api from './api';
import { Dispatch } from 'react-redux';

import { User } from './model';

export const GET_ALL_REQUEST = 'data/users/getAllRequest';
export type GET_ALL_REQUEST = typeof GET_ALL_REQUEST;
export const GET_ALL_SUCCESS = 'data/users/getAllSuccess';
export type GET_ALL_SUCCESS = typeof GET_ALL_SUCCESS;
export const GET_ALL_FAILURE = 'data/users/getAllFailure';
export type GET_ALL_FAILURE = typeof GET_ALL_FAILURE;

interface GetAllRequest {
  type: GET_ALL_REQUEST;
}

interface GetAllSuccess {
  type: GET_ALL_SUCCESS;
  payload: User[];
}

interface GetAllFailure {
  type: GET_ALL_FAILURE;
  error: {};
}

export type Actions = GetAllRequest | GetAllSuccess | GetAllFailure;

export const getUsers = () => (dispatch: Dispatch<Actions>) => {
  dispatch<Actions>({
    type: GET_ALL_REQUEST
  });

  api.getUsers().then(data => {
    dispatch<Actions>({
      type: GET_ALL_SUCCESS,
      payload: data.users
    });
  });
};
