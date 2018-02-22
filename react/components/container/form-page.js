import React from 'react';

import util from 'util';

import {connect} from 'react-redux';

import ErrorBoundary from '../error-boundary';

import getUserAndForm from '../../actions/get-user-and-form';

import FormHeader from '../presentational/form-header';

import DynamicForm from './dynamic-form'

class FormPage extends React.Component {
	constructor(props) {
		super(props);
		this.props.fetch(this.props.formName);
	}
	render() {
		return(
			<ErrorBoundary>
				<FormHeader
					name={this.props.userName}
				/>
				<DynamicForm
					form={this.props.formName}
					formName={this.props.formName}
					structure={this.props.formStructure}
				/>
			</ErrorBoundary>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userName: state.user.name,
		formStructure: state.structure
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetch: (name) => getUserAndForm(name, dispatch)
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return {
		...stateProps,
		...dispatchProps,
		//ownProps is needed for access to the props passed from the higher order component
		...ownProps
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FormPage);
