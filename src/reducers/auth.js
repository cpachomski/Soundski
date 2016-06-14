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

function startLogin(state) {
	return { ...state, loginInProgress: true }
};

function endLogin(state) {
	return { ...state, loginInProgress: false }
};

function loginSuccess(state) {
	return { ...state, loginSuccess: true }
};

export default function( state = initialState, action) {
  switch (action.type) {
    case actionTypes.ME_SET:
      return setMe(state, action);
    case actionTypes.LOGIN_START:
    	return startLogin(state);
    case actionTypes.LOGIN_END:
    	return endLogin(state);
    case actionTypes.LOGIN_SUCCESS:
    	return loginSuccess(state);
  }
  return state;
};