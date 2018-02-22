const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('../css/[name].styles.css');

const uglify = new webpack.optimize.UglifyJsPlugin({
	compress: {
		warnings: false
	}
});

const config = {
	//create source maps to find errors with uncompiled code line references
	devtool: "eval-source-map",
	entry: {
		"index": "./react/provider.js"
	},
	//name the compiled files and tell them where to go
	output: {
		filename: "[name].bundle.js",
		path: __dirname + "/public/js",
		sourceMapFilename: "./logs/react/source-maps/[name].bundle.js.map",
	},
	module: {
		loaders: [{
			//ways to transform js files on compilation
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['react-hot-loader',  'babel-loader?presets[]=env,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime']
		}, {
			test: /\.scss$/,
			loaders: extractCSS.extract({
				fallback: "style-loader",
				use: [{
					loader: "css-loader",
					options: {
						minimize: true
					}
				}, {
					loader: "sass-loader"
				}]
			})
		}]
	},
	plugins: [
		extractCSS
	]
}

if(process.env.NODE_ENV === 'production') {
	config.output.filename = "[name].bundle.min.js";
	config.plugins.push(uglify);
}

module.exports = config;
