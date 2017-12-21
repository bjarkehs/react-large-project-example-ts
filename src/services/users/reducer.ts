import { combineReducers, Reducer } from 'redux';
import { createSelector } from 'reselect';

import { Actions, GET_ALL_SUCCESS } from './actions';
import { User } from './models';

interface ByIdState {
  [index: string]: User;
}

type AllIdsState = string[];

export interface State {
  byId: ByIdState;
  allIds: AllIdsState;
}

const usersById: Reducer<ByIdState> = (state = {}, action: Actions) => {
  switch (action.type) {
    case GET_ALL_SUCCESS:
      const newState = {};
      action.payload.forEach(user => {
        newState[user.id] = user;
      });
      return newState;
    default:
      return state;
  }
};

const allUsers: Reducer<AllIdsState> = (state = [], action: Actions) => {
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

export const getAllUsers = createSelector(byIdSelector, ids =>
  Object.keys(ids).map(key => ids[key])
);

export const getUser = (state: State, id: string): User | undefined => byIdSelector(state)[id];
