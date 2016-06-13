import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './stores/configureStore';
import * as actions from './actions';

import Stream from './components/Stream/Stream';

//dummy data
const tracks = [
	{
		title: 'Track 1'
	}, 
	{
		title: 'Track 2'
	}
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));


ReactDOM.render(<Stream/>, document.getElementById('root'))