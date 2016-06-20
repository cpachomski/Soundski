import { CLIENT_ID } from '../constants/auth';
import * as actionTypes from '../constants/actionTypes';

function updateSearchTerm(searchTerm) {
  return {
    type: actionTypes.UPDATE_SEARCH_TERM,
    searchTerm
  }
}

function updateSearchResults(searchResults) {
  return {
    type: actionTypes.UPDATE_SEARCH_RESULTS,
    searchResults
  }
}

function setArtist(artist) {
  return {
    type: actionTypes.ARTIST_SET,
    artist
  }
}

export function setSearchTerm(searchTerm) {
	return function(dispatch) {
		dispatch(updateSearchTerm(searchTerm));
    SC.initialize({ client_id: CLIENT_ID });
    SC.get('/users', {q: searchTerm})
      .then((artists) => {
        dispatch(updateSearchResults(artists));
      })
	}
}


