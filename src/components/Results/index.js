import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Results from './presenter';

function mapStateToProps(state) {
	const { searchResults, searchTerm } = state.search;
	return {
    	searchResults,
    	searchTerm
	}
};


export default connect(mapStateToProps)(Results);