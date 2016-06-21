import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Stream from './presenter';

//STREAM CONTAINER

function mapStateToProps(state) {
  	const { user, loginInProgress, loginSuccess } = state.auth;
	const { tracks, activeTrack, trackPlaying } = state.track;
	const { searchComplete } = state.search;

	return {
    	user,
    	loginInProgress,
    	loginSuccess,
		tracks,
    	activeTrack,
    	searchComplete
	}
};

function mapDispatchToProps(dispatch) {
	return {
		onAuth: bindActionCreators(actions.auth, dispatch),
		onUpdateSearchTerm: bindActionCreators(actions.setSearchTerm, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);