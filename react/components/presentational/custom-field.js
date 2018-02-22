import React from 'react';

import util from 'util';

import {Field} from 'redux-form';

import ErrorBoundary from '../error-boundary';

import SelectGroup from './select-group';

import TextareaGroup from './textarea-group';

import RadioGroup from './radio-group';

import CheckboxGroup from './checkbox-group';

import TextInputGroup from './text-input-group';

class CustomField extends React.Component {
	constructor(props) {
		super(props);
		this.statelessComponent = this.component.bind(this);
	}

	component() {
		switch(this.props.kind) {
			case 'dropdown':
				//NOTE options are embedded in selects as subfields or if dynamic fetched with the this.props.populate thunk
				return (
					<SelectGroup
						name={this.props.name}
						label={this.props.label}
						fields={this.props.fields}
					/>
				);
			case 'paragraph':
				return (
					<TextareaGroup
						name={this.props.name}
						label={this.props.label}
						fields={this.props.fields}
					/>
				);
			case 'radio-buttons':
				return (
					<RadioGroup
						name={this.props.name}
						label={this.props.label}
						fields={this.props.fields}
					/>
				);
			case 'checkboxes':
				return (
					<CheckboxGroup
						name={this.props.name}
						label={this.props.label}
						fields={this.props.fields}
					/>
				);
			case 'single-line-text':
				return (
					<TextInputGroup
						name={this.props.name}
						label={this.props.label}
						fields={this.props.fields}
					/>
				);
			default:
				return (<ErrorBoundary />);
		}
	}

	render() {

		return(
			<ErrorBoundary>
				<Field
					name={`f-${this.props.name}`}
					component={this.statelessComponent}
				/>
			</ErrorBoundary>
		);
	}
}

export default CustomField;
