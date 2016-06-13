import React from 'react';

/* Stream Component */

function Stream ({ tracks = [] }) {
	return (
		<div className='tracks--list'>
			{
				tracks.map((track, i) => {
					return <div className='track' key={i}>{track.title}</div>
				})
			}
		</div>
	)
}

export default Stream;