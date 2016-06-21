import { CLIENT_ID } from '../constants/auth';
import * as actionTypes from '../constants/actionTypes';
import { setTracks } from './track';


function setMe(user) {
  return {
    type: actionTypes.ME_SET,
    user
  }
}

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



function fetchArtistStream(artist) {
  return function(dispatch) {
    SC.initialize({ client_id: CLIENT_ID });
    SC.get(`/users/${artist.id}/tracks`)
      .then((data) => {
        console.log('here');
        dispatch(setTracks(data))
        console.log("here");
      })
  }
}


export function setSearchTerm(searchTerm) {
	return function(dispatch) {
		dispatch(updateSearchTerm(searchTerm));
    if (searchTerm.split('').length > 0) {

      SC.initialize({ client_id: CLIENT_ID });
      SC.get('/users', {q: searchTerm})
        .then((artists) => {
          dispatch(updateSearchResults(artists));
        })
    } 
	}
}

export function setArtist(artist) {
  return function(dispatch) {
    setTimeout(() => {
      const visContainer = document.createElement('DIV');
      visContainer.setAttribute('id', 'visualizer');
      document.getElementById('container').appendChild(visContainer);

      dispatch(setMe(artist));
      dispatch(fetchArtistStream(artist));
      
    })
  }
}

