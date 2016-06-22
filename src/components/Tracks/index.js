import React from 'react';
import Track from '../Track';

import './style.scss';

export default React.createClass({

  getInitialState() {
    return {
      mounted: false
    }
  },

  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        mounted: true
      })
    }, 50)
  },

  render() {
    const animClass = this.state.mounted ? 'tracks mounted': 'track'

    return (
      <div className={ animClass }>
        {
          this.props.tracks.map((track, i) => {
            return (
              <Track track={ track } key={ i }/>
            )
          })
        }
      </div>
    )
  }
});