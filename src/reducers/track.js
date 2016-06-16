import * as actionTypes from '../constants/actionTypes';
import Visualizer from '../components/stream/audioVisualizer';

const initialState = {
  tracks: [],
  activeTrack: null,
};


function setTracks(state, action) {
  const { tracks } = action;
  return { ...state, tracks };
};

function playTrack(state, action) {
  const { track } = action;
  return { ...state, activeTrack: track};
};

function pauseTrack(state) {
  return { ...state, activeTrack: null}
};

export default function(state = initialState, action) {
	switch (action.type) {
		  case actionTypes.TRACKS_SET:
			   return setTracks(state, action);
	    case actionTypes.TRACK_PLAY:
	       return playTrack(state, action);
      case actionTypes.TRACK_PAUSE:
         return pauseTrack(state);
	}
	return state;
}