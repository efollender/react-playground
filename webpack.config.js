var webpack = require('webpack');
var nib = require('nib');
var normalize = require('normalize');
var rupture = require('rupture');
var jeet = require('jeet');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: './public/bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.js$/, 
	      	  exclude: /node_modules/, 
	      	  loader: 'babel-loader'
	     	},
	      	{
	        	test: /\.styl$/,
	        	loader: 'style-loader!css-loader!stylus-loader?paths=node_modules/foundation/stylus'
	      	},
			{ test: /\.css$/, loader: 'css-loader' },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.png$/, loader: "url-loader?limit=100000" },
			{ test: /\.jpg$/, loader: "file-loader" }
		]
	},
	stylus: {
		use: [
			nib(),
			normalize(),
			rupture(),
			jeet()
		]
	}	
};