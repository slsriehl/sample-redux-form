import React from 'react';

import util from 'util';

import ErrorBoundary from '../error-boundary';

class TextareaGroup extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ErrorBoundary>
				<div className="text-form-wrap">
					<label htmlFor={this.props.name} className="input_textarea">{this.props.label}</label>
					<textarea
						type="text"
						name={this.props.name}
						placeholder={this.props.fields[0].subLabels && this.props.fields[0].subLabels.placeholder ? this.props.fields[0].subLabels.placeholder.label : null}
						locked={this.props.locked ? 'locked' : null}
					/>
				</div>
			</ErrorBoundary>
		);
	}
}

export default TextareaGroup;
