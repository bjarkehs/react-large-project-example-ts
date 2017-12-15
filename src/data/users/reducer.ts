import { ADD } from './actions';

const initialState: any[] = [];

export const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ADD:
			return [
				...state,
				action.payload
			];
		default:
			return state;
	}
}	 