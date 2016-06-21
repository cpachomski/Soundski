import * as actionTypes from '../constants/actionTypes';

const initialState = {
	searchTerm: '',
	searchResults: [],
	searchComplete: false,
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

function searchComplete(state) {
 	return { ...state, searchComplete: true }
}

export default function ( state = initialState, action ) {
	switch(action.type) {
		case actionTypes.UPDATE_SEARCH_TERM:
			return setSearchTerm(state, action);
		case actionTypes.UPDATE_SEARCH_RESULTS:
			return setSearchResults(state, action);
		case actionTypes.ARTIST_SET:
			return setArtist(state, action);
		case actionTypes.SEARCH_COMPLETE:
			return searchComplete(state);
	};
	return state;
};