import React from 'react';

import util from 'util';

import ErrorBoundary from '../error-boundary'

import FormPage from '../container/form-page'

class SurveyHOC extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ErrorBoundary>
			{/* insert prop-less container components for header, etc */}
				<FormPage {...this.props} /> {/* pass props to get the :id from the route that we need to fetch & populate the form structure */}
			</ErrorBoundary>
		);
	}
}

export default SurveyHOC;
