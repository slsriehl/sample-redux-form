import React from 'react';

import util from 'util';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({
			hasError: true
		});
		//TODO log error & info in papertrail/similar
	}

	render() {
		if(this.state.hasError) {
			return(
				<div className="error-boundary">
					<p>Display Error</p>
				</div>
			);
		} else if(this.props.children) {
			return this.props.children;
		} else {
			return null;
		}
	}
}

export default ErrorBoundary;
