import * as actionTypes from '../constants/actionTypes';

const initialState = {
	loginInProgress: false,
	loginSuccess: false,
	user: null
};


function setMe(state, action) {
  const { user } = action;
  return { ...state, user };
}''

function setLoginStart(state) {
	return { ...state, loginInProgress: true }
};

function setLoginEnd(state) {
	return { ...state, loginInProgress: false }
};

function setLoginSuccess(state) {
	return { ...state, loginSuccess: true }
};

export default function( state = initialState, action) {
  switch (action.type) {
    case actionTypes.ME_SET:
      return setMe(state, action);
    case actionTypes.LOGIN_START:
    	return setLoginStart(state);
    case actionTypes.LOGIN_END:
    	return setLoginEnd(state);
    case actionTypes.LOGIN_SUCCESS:
    	return setLoginSuccess(state);
  }
  return state;
};