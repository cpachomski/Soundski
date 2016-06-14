import * as actionTypes from '../constants/actionTypes';

const initialState = {
	loginInProgress: false,
	user: null
};


function setMe(state, action) {
  const { user } = action;
  return { ...state, user};
}''

function startLogin(state) {
	console.log(state);
	return { ...state, loginInProgress: true }
};

function endLogin(state) {
	console.log(state);
	return { ...state, loginInProgress: false }
};

export default function( state = initialState, action) {
  switch (action.type) {
    case actionTypes.ME_SET:
      return setMe(state, action);
    case actionTypes.LOGIN_START:
    	return startLogin(state);
    case actionTypes.LOGIN_END:
    	return endLogin(state);
  }
  return state;
};