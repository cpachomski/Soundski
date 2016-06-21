import React from 'react';
import Result from '../Result';

import './style.scss';


export default React.createClass({
	render() {
		const { searchResults, searchTerm } = this.props;
		const resultsLength = searchResults.length;
		return (
			<div>
				{ resultsLength > 0 ?
					<div className='results-container'>
						<p className='results-count'>{ resultsLength } artist(s) found</p>
						<div className='results'>
							{
								searchResults.map((result, i) => {
									return (
										<Result key={i} number={i} result={result} />
									)
								})
							}
						</div>
					</div>
					:

					null


				}
			</div>
		)
	}
});