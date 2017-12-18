import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import { Actions, GET_ALL_SUCCESS } from './actions';
import { User } from './model';

export interface State {
  byId: { [index: string]: User };
  allIds: string[];
}

const usersById = (state = {}, action: Actions) => {
  switch (action.type) {
    case GET_ALL_SUCCESS:
      const newState = {};
      action.payload.forEach((user) => {
        newState[user.id] = user;
      });
      return newState;
    default:
      return state;
  }
};

const allUsers = (state: User[] = [], action: Actions) => {
  switch (action.type) {
    case GET_ALL_SUCCESS:
      return [...action.payload.map(user => user.id)];
    default:
      return state;
  }
};

export const reducer = combineReducers<State>({
  byId: usersById,
  allIds: allUsers
});

const byIdSelector = (state: State) => state.byId;

export const getAllUsers = createSelector(
  byIdSelector, 
  ids => Object.keys(ids).map(key => ids[key])
);
