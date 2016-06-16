import * as actionTypes from '../constants/actionTypes';

function updateSearchTerm(searchTerm) {
  return {
    type: actionTypes.UPDATE_SEARCH_TERM,
    searchTerm
  }
}

function setArtist(artist) {
  return {
    type: actionTypes.ARTIST_SET,
    artist
  }
}

export function setSearchTerm(searchTerm) {
	console.log(searchTerm);
	return function(dispatch) {
		dispatch(updateSearchTerm(searchTerm));
	}
}


