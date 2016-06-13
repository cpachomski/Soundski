import React from 'react';
import { connect } from 'react-redux';
import Stream from './presenter';

//STREAM CONTAINER

function mapStateToProps(state) {
	const tracks = state.track;
	return {
		tracks
	}
};

export default connect(mapStateToProps)(Stream);