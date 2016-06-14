import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Stream from './presenter';

//STREAM CONTAINER

function mapStateToProps(state) {
  const { user, loginInProgress } = state.auth;
	const { tracks, activeTrack } = state.track;
	return {
    	user,
    	loginInProgress,
		tracks,
    	activeTrack
	}
};

function mapDispatchToProps(dispatch) {
	return {
		onAuth: bindActionCreators(actions.auth, dispatch),
    	onPlay: bindActionCreators(actions.playTrack, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);