import React, {Component, PropTypes} from 'react';

export default class Main extends Component {
	render() {
		return (
			<div>
				Main.
				{this.props.children}
			</div>
			);
	}
}