import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import moment from 'moment';
import Arrow from 'react-icons/lib/md/play-arrow';
import Pause from 'react-icons/lib/md/pause';
import BadMood from 'react-icons/lib/md/mood-bad';
import AudioVisualizer from './audioVisualizer';
import { CLIENT_ID } from '../../constants/auth';
import './style.scss';

class Stream extends React.Component {

	componentDidMount() {
		this.playing = false;
		window.animation = null;
	}

	componentDidUpdate() {
		const audioElement = ReactDOM.findDOMNode(this.refs.audio);

		if (audioElement) {
			const { activeTrack } = this.props;
			if ( activeTrack ) {
				audioElement.play();
			} else {
				audioElement.pause();
			}
		}

	}

	startVisualization() {
		setTimeout(() => {
			window.viz = new AudioVisualizer(this.refs.audio);
			
		}, 50);
	}

	render() {
		const { user, loginInProgress, loginSuccess, tracks = [], activeTrack, onAuth, onPlay, onPause } = this.props;

		const loginClass = classNames({
			'login': true,
			'login active': loginInProgress,
			'login complete': loginSuccess
		});

		const streamClass = loginSuccess ? 'stream logged-in': 'stream';

		return (
			<div className='stream-presenter'>
				{ !user ?

					<div className={loginClass} ref='login'>
						<h1>Soundcloud Player</h1>
						<button className='btn' onClick={onAuth}>Login</button>
					</div> :
					<div className='stream'>
						<div className='left-col'>
							<div className='user'>
								<h2 className='username'> { user.username }</h2>
								<span className='city'>{ user.city },</span>
								<span className='country'> { user.country }</span>
							</div>
							<div className='tracks'>
								{
									tracks.map((track, i) => {
										return (
											<div className='track' key={i}>
												<div className='details'>
													<span className='title'>{track.origin.title}</span>
													<span className='length'>{moment().seconds(track.origin.duration).format('mm:ss')}</span>
												</div>
												<div className='control'>
												{
													activeTrack && activeTrack.origin.title ==  track.origin.title ?
														<button className='btn' type='button' onClick={() => onPause()}><Pause /></button>
														:
														<button className='btn' type='button' onClick={() => onPlay(track)}><Arrow /></button>
												}
												</div>
											</div>
										)
									})
								}
							</div>
						</div>
						<div className='active-track'>
							{
								activeTrack ?
								<div id='viz-container'>
									<h4>Playing -> { activeTrack.origin.title } </h4>
									<audio crossOrigin='anonymous' ref='audio' src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}> { this.startVisualization() }</audio>
									
								</div>

								:
								null
							}
						</div>

					</div>
				}
			</div>
		)
	}
}

export default Stream