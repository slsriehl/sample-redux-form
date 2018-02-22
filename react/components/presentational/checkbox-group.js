import React from 'react';

import util from 'util';

import ErrorBoundary from '../error-boundary';

class CheckboxGroup extends React.Component {
	constructor(props) {
		super(props);
		if(!this.props.fields.length) this.props.populate(this.props.name);
	}
	render() {

		const boxes = () => {
			if(this.props.fields.length) {
				return this.props.fields.map((field, index) => {
					return (
						<ErrorBoundary
							key={index}
						>
							<label className="checkbox-label">
								{field.subLabels.optionLabel.label}
								<input
									type="checkbox"
									name={field._id}
								/>
								<span className="checkmark"></span>
							</label>
						</ErrorBoundary>
					)
				})
			} else {
				return this.props.fetches[this.props.name].map((field, index) => {
					return (
						<ErrorBoundary
							key={index}
						>
							<label className="checkbox-label">
								{field.display}
								<input
									type="checkbox"
									name={field.value}
								/>
								<span className="checkmark"></span>
							</label>
						</ErrorBoundary>
					);
				});
			}
		}

		return(
			<ErrorBoundary>
				<div className="checkbox-form-wrap">
					<span className="checkbox-title">{this.props.label}</span>
					{boxes()}
				</div>
			</ErrorBoundary>
		);
	}
}

export default CheckboxGroup;
