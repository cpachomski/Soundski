import * as actionTypes from '../constants/actionTypes';

const initialState = {
	searchTerm: '',
	searchResults: [],
	artist: {}
}

function setSearchTerm(state, action) {
	const { searchTerm } = action;
	return { ...state, searchTerm }
}

function setSearchResults(state, action) {
	const { searchResults } = action;
	return { ...state, searchResults }
}

function setArtist(state, action) {
	const { artist } = action;
	return { ...state, artist }
}

export default function ( state = initialState, action ) {
	switch(action.type) {
		case actionTypes.UPDATE_SEARCH_TERM:
			return setSearchTerm(state, action);
		case actionTypes.UPDATE_SEARCH_RESULTS:
			return setSearchResults(state, action);
		case actionTypes.ARTIST_SET:
			return setArtist(state, action);
	};
	return state;
};