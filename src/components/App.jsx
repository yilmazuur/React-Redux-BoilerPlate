import React from 'react';
import { Component, PropTypes } from 'react';

export default class App extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	// componentWillMount() {
	//   let tokenExists = this.props.checkToken();
	//   if (tokenExists /* TODO token valid check */) {
	//     this.context.router.push('mainPage');
	//     return;
	//   }
	//   this.context.router.push('signIn');
	// }

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
