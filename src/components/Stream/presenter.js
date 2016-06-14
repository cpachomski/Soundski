import React from 'react';
import ReactDOM from 'react-dom';
import Arrow from 'react-icons/lib/md/play-arrow';
import Pause from 'react-icons/lib/md/pause';
import { CLIENT_ID } from '../../constants/auth';
import './style.scss';

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
				<div className='stream'>
						{
							user ?
							<div className='left-col'>
								<div className='user'>
									<h2 className='username'> { user.username }</h2>
									<span className='city'>{ user.city }</span> |
									<span className='country'> { user.country }</span>
								</div>
								<div className='tracks'>
									{
										tracks.map((track, i) => {
											return (
												<div className='track' key={i}>
													{track.origin.title}
													<button className='btn play' type='button' onClick={() => onPlay(track)}></button>
												</div>
											)
										})
									}
								</div>
							</div>:
								<div className='login'>
									<h1>Soundcloud Player</h1>
									<button className='btn' onClick={onAuth}>Login</button>
								</div>
						}
					<div className='right-col'>
						{
							activeTrack ?
							<div>
								<h4>Playing -> { activeTrack.origin.title } </h4>
								<audio id='audio' ref='audio' src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}></audio>
							</div>:
							null
						}
					</div>
				</div>
		)
	}
}

export default Stream