import React from 'react';
import Result from '../Result';

import './style.scss';


export default React.createClass({
	render() {
		const { searchResults, searchTerm } = this.props;
		const resultsLength = searchTerm.split('').length;
		return (
			<div className='search-results'>
				<p className='results-count'>{ resultsLength } artist(s) found.</p>
				{	resultsLength > 0 ?
					searchResults.map((result, i) => {
						return (
							<Result key={i} number={i} result={result} />
						)
					})

					: 

					null
				}
			</div>
		)
	}
});