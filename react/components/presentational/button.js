import React from 'react';

import util from 'util';

import ErrorBoundary from '../error-boundary'

class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ErrorBoundary>
				<button type="submit">
					{this.props.title}
				</button>
			</ErrorBoundary>
		);
	}
}

export default Button;
