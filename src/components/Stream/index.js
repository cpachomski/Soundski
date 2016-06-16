import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Stream from './presenter';

//STREAM CONTAINER

function mapStateToProps(state) {
  const { user, loginInProgress, loginSuccess } = state.auth;
	const { tracks, activeTrack, trackPlaying } = state.track;
	return {
    	user,
    	loginInProgress,
    	loginSuccess,
		tracks,
    	activeTrack
	}
};

function mapDispatchToProps(dispatch) {
	return {
		onAuth: bindActionCreators(actions.auth, dispatch),
		onUpdateSearchTerm: bindActionCreators(actions.setSearchTerm, dispatch),
		onSearch: bindActionCreators(actions.search, dispatch),
    	onPlay: bindActionCreators(actions.playTrack, dispatch),
    	onPause: bindActionCreators(actions.pauseTrack, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);