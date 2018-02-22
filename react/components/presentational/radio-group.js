import React from 'react';

import util from 'util';

import ErrorBoundary from '../error-boundary';

class RadioGroup extends React.Component {
	constructor(props) {
		super(props);
		if(!this.props.fields.length) this.props.populate(this.props.name);
	}
	render() {

		const buttons = () => {
			if(this.props.fields.length) {
				return this.props.fields.map((field, index) => {
					return (
						<ErrorBoundary
							key={index}
						>
							<label className="radio-label">
								{field.subLabels.optionLabel.label}
								<input
									type="radio"
									value={field._id}
									name={this.props.name}
								/>
								<span className="radio-button">
								</span>
							</label>
						</ErrorBoundary>
					);
				});
			} else {
				return this.props.fetches[this.props.name].map((field, index) => {
					return (
						<ErrorBoundary
							key={index}
						>
							<label className="radio-label">
								{field.display}
								<input
									type="radio"
									value={field.value}
									name={this.props.name}
									locked={this.props.locked ? 'locked' : null}
								/>
								<span className="radio-button">
								</span>
							</label>
						</ErrorBoundary>
					);
				});
			}
		}

		return(
			<ErrorBoundary>
				<div className="radio-form-wrap">
					<span className="radio-title">{this.props.label}</span>
					{buttons()}
				</div>
			</ErrorBoundary>
		);
	}
}

export default RadioGroup;
