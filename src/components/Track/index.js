import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Track from './presenter';

function mapStateToProps(state) {
  const { activeTrack } = state.track;
  return {
    activeTrack
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onPlay: bindActionCreators(actions.playTrack, dispatch),
    onPause: bindActionCreators(actions.pauseTrack, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Track);