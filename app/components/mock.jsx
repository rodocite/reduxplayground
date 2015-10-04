import React from 'react';
import {RouteHandler} from 'react-router';

export default class mock extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>Check check check</div>
				<RouteHandler
					{...this.props}
				/>
			</div>
		);
	}
}

mock.contextTypes = {
	router: React.PropTypes.func.isRequired,
};
