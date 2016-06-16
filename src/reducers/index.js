import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import track from './track';
import search from './search';

export default combineReducers({
  	auth,
	track,
	search,
	routing: routerReducer
});