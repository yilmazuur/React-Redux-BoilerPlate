import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormField from '../dumb/FormField.jsx';

//Client side validation
function validate(values) {
	var errors = {};
	var hasErrors = false;
	if (!values.username || values.username.trim() === '') {
		errors.username = 'Enter username';
		hasErrors = true;
	}
	if (!values.password || values.password.trim() === '') {
		errors.password = 'Enter password';
		hasErrors = true;
	}
	return hasErrors && errors;
}

class SignInForm extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.user !== undefined && nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
			this.context.router.push('MainPage');
		}

		//error
		//Throw error if it was not already thrown (check this.props.user.error to see if alert was already shown)
		//If u dont check this.props.user.error, u may throw error multiple times due to redux-form's validation errors
		if (nextProps.user !== undefined && nextProps.user.status === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
			//alert(nextProps.user.error.message);
		}
	}

	render() {
		const {asyncValidating, handleSubmit, submitting} = this.props;
		return (
			<div className="table-centered">
				<div className="tableCell-centered">
					<div className="col-sm-4 col-centered loginBox">
						<div className="modal-header">
							Header
						</div>
						<div className="modal-body">
							<form onSubmit={handleSubmit(this.props.validateAndSignInUser)}>
								<Field
									name="username"
									type="text"
									component={FormField}
									label="Username" />
								<Field
									name="password"
									type="password"
									component={FormField}
									label="Password" />
								<div>
									<button
										type="submit"
										className="btn btn-primary btn-block"
										disabled={submitting}>
										Submit
                  </button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default reduxForm({
	form: 'SignInForm', // a unique identifier for this form
	validate // <--- validation function given to redux-form
})(SignInForm);