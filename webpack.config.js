const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, './src'),
	watch: true,
	entry: {
		app: './assets/index.js',
	},
	output: {
		path: path.resolve(__dirname, './docs/assets'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					babelrc: false
				}
			}
		}]
	},
	devServer: {
		contentBase: path.join(__dirname, "./docs"),
		compress: true,
		port: 9000
	}
};