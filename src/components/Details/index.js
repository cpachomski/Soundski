import React from 'react';
import './style.scss';

export default React.createClass({
	render() {
		const { user } = this.props;
		return (
			<div className='user'>
				<h2 className='username'> { user.username }</h2>
				<span className='city'>{ user.city },</span>
				<span className='country'> { user.country }</span>
			</div>
		)
	}
});