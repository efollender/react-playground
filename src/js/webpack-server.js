import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from '../../webpack.config';

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
	hot: true,
	noInfo: true,
	quiet: false,
	publicPath: config.output.publicPath,
	stats: {
		colors: true,
	},
});

server.listen(3001, 'localhost', () => {
	console.log('Dev server started. Chyeah.');
});