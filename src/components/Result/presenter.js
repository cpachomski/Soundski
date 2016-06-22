import React from 'react';
import './style.scss';


export default React.createClass({
	getInitialState() {
		return {
			mounted: false
		}
	},

	componentDidMount() {
		setTimeout(()=> {
			this.setState({
				mounted: true
			})
		}, 50)
	},

	handleClick() {
		this.props.setArtist(this.props.result)
	},


	render() {
		const { result, number } = this.props;
		const animClass = this.state.mounted ? 'search-result mounted ' + 'no-' + number : 'search-result '  + 'no-' + number
		return (
			<div className={animClass} onClick={ this.handleClick }>
				<img src={ result.avatar_url } />
				<div className='result-info'>
					<p className='username'>{ result.username }	</p>
					<p className='followers'>Followers: { result.followers_count }	</p>
					<p className='song-count'>Tracks: { result.track_count }	</p>
					<p className='country'>Country: { result.country || "unknown" }	</p>

				</div>
			</div>
		)
	}
})