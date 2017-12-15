import { GET_ALL } from './actions';

const initialState: any[] = [];

export const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case GET_ALL:
			return action.payload;
		default:
			return state;
	}
}	 