import React from 'react';

class Callback extends React.Component {
	componentDidMount() {
		window.setTimeout(opener.SC.connectCallback, 1);
	}

	render() {
		return <div><p>This will all be over soon...</p></div>
	}
}

export default Callback;