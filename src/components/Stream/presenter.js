import React from 'react';

function Stream ({ user, tracks = [], onAuth }) {
	return (
		<div>
			<div>{
				user ?
				<div> {user.username} </div> :
				<button onClick={onAuth} type='button'>Login</button>
			}
			</div>
			<br/>
			<div className='tracks--list'>
				{
					tracks.map((track, i) => {
						return <div className='track' key={i}>{track.origin.title}</div>
					})
				}
			</div>
		</div>
	)
}

export default Stream