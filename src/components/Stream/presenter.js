import React from 'react';
import ReactDOM from 'react-dom';
import { CLIENT_ID } from '../../constants/auth';





class Stream extends React.Component {
	componentDidUpdate() {
		const audioElement = ReactDOM.findDOMNode(this.refs.audio);
		if(!audioElement) { return; }

		const { activeTrack } = this.props;
		if ( activeTrack ) {
			audioElement.play();
		} else {
			audoElement.pause();
		}
	}

	render() {
		const { user, tracks = [], activeTrack, onAuth, onPlay } = this.props;

		return (
				<div>
					<div>
						{
							user ?
								<div className='username'> { user.username } </div> :
								<button className='btn login' onClick={onAuth}>Login</button>
						}
					</div>
					<br/>
					<div>
						{
							tracks.map((track, i) => {
								return (
									<div className='track' key={i}>
										{track.origin.title}
										<button className='btn play' type='button' onClick={() => onPlay(track)}>Play</button>
									</div>
								)
							})
						}
					</div>
					<br/>
					<div>
						{
							activeTrack ?
							<audio id='audio' ref='audio' src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}></audio> :
							null
						}
					</div>
				</div>
		)
	}
}

export default Stream