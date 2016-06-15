import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';
import * as actionTypes from '../constants/actionTypes';
import { setTracks } from '../actions/track';


function setMe(user) {
  return {
    type: actionTypes.ME_SET,
    user
  }
}

function setLoginStart() {
  return {
    type: actionTypes.LOGIN_START
  }
}

function setLoginEnd() {
  return {
    type: actionTypes.LOGIN_END
  }
}

function setLoginSuccess() {
  return {
    type: actionTypes.LOGIN_SUCCESS
  }
}


function fetchStream(me, session) {
  return function(dispatch) {
    fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
      .then((response) => response.json())
      .then((data) => {   
        dispatch(setTracks(data.collection));
      });
  }
}


export function auth() {
  return function(dispatch){
    dispatch(setLoginStart());
    SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });
  	SC.connect().then((session) => {
      dispatch(setLoginEnd());
      dispatch(setLoginSuccess());
      fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
        .then((response) => response.json())
        .then((me) => {
          setTimeout(() => {
              const visContainer = document.createElement('DIV');
              visContainer.setAttribute('id', 'visualizer')
              document.getElementById('container').appendChild(visContainer)
            dispatch(setMe(me));
            dispatch(fetchStream(me, session))
          }, 1000);
  			});
  	});
  };
};