import React from 'react';

import util from 'util';

import ErrorBoundary from '../error-boundary';

class SelectGroup extends React.Component {
	constructor(props) {
		super(props);
		if(!this.props.fields[0].fields.length) this.props.populate(this.props.fields[0]._id);
	}
	render() {

		const options = () => {
			if(this.props.fields[0].fields.length) {
				return this.props.fields[0].fields.map((option, index) => {
					return (
						<option
							key={index}
							value={option.subLabels.optionLabel.label}
						>
							{option.subLabels.optionLabel.label}
						</option>
					);
				});
			} else {
				return this.props.fetches[this.props.fields[0]._id].map((item, index) => {
					return (
						<option
							key={index}
							value={item.value}
						>
							{item.display}
						</option>
					);
				});
			}
		}

		return(
			<ErrorBoundary>
				<div className="select-form-wrap">
					<label htmlFor={this.props.fields[0]._id} className="select_label">
						{this.props.label}
					</label>
					<select name={this.props.fields[0]._id} className="dropdown" locked={this.props.locked ? 'locked': null}>
						{options()}
					</select>
				</div>
			</ErrorBoundary>
		);
	}
}

export default SelectGroup;
