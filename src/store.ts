import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";

import { reducer as dataReducer } from './data/reducer';
import { reducer as scenesReducer } from './scenes/reducer';

const appReducers = combineReducers({
  data: dataReducer,
  scenes: scenesReducer
});

export default createStore(
  appReducers,
  applyMiddleware(logger, thunk)
);