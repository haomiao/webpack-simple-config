const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = merge(common, {
	plugins: [
		new UglifyJSPlugin(),
		//new MinifyPlugin({}, {}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('release')
		})
	]
});