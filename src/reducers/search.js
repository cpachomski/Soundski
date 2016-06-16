import * as actionTypes from '../constants/actionTypes';

const initialState = {
	searchTerm: null
}

function setSearchTerm(state, action) {
	const { searchTerm } = action;
	return { ...state, searchTerm }
}

export default function ( state = initialState, action ) {
	switch(action.type) {
		case actionTypes.UPDATE_SEARCH_TERM:
			return setSearchTerm(state, action)
	}
	return state;
};