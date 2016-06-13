import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Stream from './presenter';

//STREAM CONTAINER

function mapStateToProps(state) {
	const tracks = state.track;
	return {
		tracks
	}
};

function mapDispatchToProps(dispatch) {
	return {
		onAuth: bindActionCreators(actions.auth, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);