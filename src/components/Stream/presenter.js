import React from 'react';

function Stream ({ tracks = [], onAuth }) {
	return (
		<div>
			<div>
				<button onClick={onAuth} type='button'>Login</button>
			</div>
			<br/>
			<div className='tracks--list'>
				{
					tracks.map((track, i) => {
						return <div className='track' key={i}>{track.title}</div>
					})
				}
			</div>
		</div>
	)
}

export default Stream