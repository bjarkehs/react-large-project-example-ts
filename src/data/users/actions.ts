import * as api from './api';

export const GET_ALL = "data/users/getAll";

export const getUsers = (payload: any) => (dispatch: any) => {
  api.getUsers().then((data) => {
    dispatch({
      type: GET_ALL,
      payload: data
    })
  });
}
