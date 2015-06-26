const React = require('react');
const Router = require('react-router');
const { Route, DefaultRoute, RouteHandler, Link } = Router;
const App =  require('../components/Main.js');

module.exports = (
	<Route name="app" path="/" handler={App} />
);