import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';
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
	return function(dispactch) {
		dispatch(updateSearchTerm(searchTerm));
	}
}


export function search(artistName) {
  return function(dispatch) {
    console.log(artistName);
    dispatch(setLoginStart());
    SC.initialize({client_id: CLIENT_ID, redirect_url: REDIECT_URI});
    SC.get('/users', {q: atistName}).then((artists) => {
      dispatch(setLoginEnd());
      dispatch(setLoginSuccess());
      dispatch(setArtist(artists[0]));
    });
  }
}