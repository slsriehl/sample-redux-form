import React from 'react';

import util from 'util';

import ErrorBoundary from '../error-boundary'

class FormHeader extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ErrorBoundary>
				<h1>Hi, {this.props.name}!  Please answer these questions.</h1>
			</ErrorBoundary>
		);
	}
}

export default FormHeader;
