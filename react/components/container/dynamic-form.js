import React from 'react';

import {reduxForm} from 'redux-form';

import util from 'util';

import DynamicFormPresentational from '../presentational/dynamic-form-presentational';

class DynamicForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<DynamicFormPresentational
				{...this.props}
			/>
		);
	}
}

const config = {
	//the form property is instead passed as a prop to the presentation component in the spread object instead of
	//form: 'form-name'
}

export default reduxForm(config)(DynamicForm)
