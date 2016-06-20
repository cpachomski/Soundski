import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Results from './presenter';

function mapStateToProps(state) {
	return {}
};

function mapDispatchToProps(dispatch) {
	return {
		setArtist: bindActionCreators(actions.setArtist, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Results);