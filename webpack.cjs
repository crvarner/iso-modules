const path = require('path')

module.exports = {
	mode: "development",
	entry: {
		client: './client.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, "static", "js")
	},
	module: {
		rules: [{
			test: /.jsx?$/,
			loader: 'babel-loader'
		}]
	}
}
