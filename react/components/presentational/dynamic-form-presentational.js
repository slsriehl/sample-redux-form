import React from 'react';

import util from 'util';

import ErrorBoundary from '../error-boundary';

import CustomField from './custom-field'

class DynamicFormPresentational extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.structure);
	}
	render() {
		return(
			<ErrorBoundary>
				{this.props.structure[this.props.formName].map((item, index) => {
					return (
						<CustomField
							key={index}
							label={item.label}
							name={item.name}
							type={item.type}
							fields={item.fields}
						/>
					)
				})}
			</ErrorBoundary>
		);
	}
}

export default DynamicFormPresentational;
