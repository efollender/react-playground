import React from 'react';
import Router, { Route, DefaultRoute, RouteHandler, Link } from 'react-router';
import Main from '../components/Main';
import App from '../components/App';

export default (
	<Route path="/" component={Main}>
		<Route path="app" component={App}/>
	</Route>
);