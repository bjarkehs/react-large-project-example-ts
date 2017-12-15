import { createStore, combineReducers } from 'redux';
import { reducer as dataReducer } from './data/reducer';
import { reducer as scenesReducer } from './scenes/reducer';

const appReducer = combineReducers({
	data: dataReducer,
	scenes: scenesReducer
});

export default createStore(
	appReducer
);