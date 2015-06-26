"use strict";

const React = require('react');
const Router = require('react-router');
const routes = require('./routes/Routes');
let css = require('./stylus/index.styl'); 

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});