var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

	entry:  __dirname + "/app/main.js",//唯一入口文件

	output: {
		path: __dirname + "/app",//打包后的文件存放的地方
		filename: "app.js"//打包后输出文件的文件名
    },

	devServer: {
		contentBase: "./app",//本地服务器所加载的页面所在的目录
		historyApiFallback: true,//不跳转
		inline: true//实时刷新
	},

	module: {
	    loaders: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					'presets': ['es2015','react','stage-0']
				}
			},
			{
				test: /\.css$/,
				loader: ["style-loader","css-loader"]
			},
			{
				test: /\.scss$/,
				loader: ["style-loader","css-loader","sass-loader"]
			},
            {
                test: /\.styl$/,
                loader: ["style-loader","css-loader","stylus-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?&name=images/[name].[ext]'
            }
	    ]
	},

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
        /*new htmlWebpackPlugin({
            filename : 'index.html'
        })*/
    ]
};


