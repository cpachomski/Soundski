import React from 'react';
import Track from '../Track';


export default React.createClass({
  render() {
    return (
      <div className='tracks'>
        {
          this.props.tracks.map((track, i) => {
            return (
              <Track track={track} key={i}/>
            )
          })
        }
      </div>
    )
  }
});