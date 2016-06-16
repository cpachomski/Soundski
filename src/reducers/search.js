import * as actionTypes from '../constants/actionTypes';

const initialState = {
	searchTerm: null
}

function setSearchTerm(state, action) {
	const {  } = action;
	return { ...state, searchTerm }
}

export default function ( state = initialState, action ) {
	switch(action.type) {
		case actionTypes.UPDATE_SEARCH_TERM:
			return
	}
	return state;
};