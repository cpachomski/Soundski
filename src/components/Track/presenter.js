import React from 'react';
import ReactDOM from 'react-dom';
import Arrow from 'react-icons/lib/md/play-arrow';
import Pause from 'react-icons/lib/md/pause';
import moment from 'moment';


export default React.createClass({

  componentDidMount() {
    window.animation = null;
  },

  componentDidUpdate() {
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);

    if(audioElement) {
      const { activeTrack } = this.props;

      if(activeTrack) {
        audioElement.play();
      } else {
        audioElement.Pause();
      }
    }
  },

  formatTime(duration) {
    let tempTime = moment.duration(duration);
    return `${tempTime.minutes()}:${tempTime.seconds()}`;
  },

  render() {
    const { activeTrack, track, onPlay, onPause } = this.props
    return (
      <div className='track'>
        <div className='details'>
          <span className='title'>{track.title}</span>
          <span className='length'>{this.formatTime(track.duration)}</span>
        </div>
        <div className='control'>
        {
          activeTrack && activeTrack.title == track.title ?
            <button className='btn' type='button' onClick={() => onPause()}><Pause /></button>
            :
            <button className='btn' type='button' onClick={() => onPlay(track)}><Arrow /></button>
        }
        </div>
      </div>
    )
  }
})  