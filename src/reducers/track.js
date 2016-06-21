import * as actionTypes from '../constants/actionTypes';

const initialState = {
  tracks: [],
  activeTrack: null,
};


function setTracks(state, action) {
  let { tracks } = action;
  const fixedTracks = tracks.map((track) => {
    return fixTrackProps(track);
  });

  tracks = fixedTracks;

  return { ...state, tracks };
};

function playTrack(state, action) {
  const { track } = action;
  const fixedTrack = fixTrackProps(track);
  return { ...state, activeTrack: fixedTrack };
};

function pauseTrack(state) {
  return { ...state, activeTrack: null } 
};

function fixTrackProps(track) {
  if (track.hasOwnProperty('origin')) {
    return track.origin;
  } else {
    return track;
  }
}

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