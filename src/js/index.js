"use strict";

import React from 'react';
import Router from 'react-router';
import {createBrowserHistory} from 'history';
import routes from './routes/Routes';
import StyleSheet from './stylus/index.styl';

let history = createBrowserHistory();

React.render(
	<Router history={history} routes={routes}/>, 
	document.getElementById('App')
);