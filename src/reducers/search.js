import * as actionTypes from '../constants/actionTypes';

const initialState = {
	searchTerm: null,
	searchResults: []
}

function setSearchTerm(state, action) {
	const { searchTerm } = action;
	return { ...state, searchTerm }
}

function setSearchResults(state, action) {
	const { searchResults } = action;
	return { ...state, searchResults }
}

export default function ( state = initialState, action ) {
	switch(action.type) {
		case actionTypes.UPDATE_SEARCH_TERM:
			return setSearchTerm(state, action);
		case actionTypes.UPDATE_SEARCH_RESULTS:
			return setSearchResults(state, action);
	};
	return state;
};