const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
	  app: './src/index.js'
  },
  plugins: [
	//new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
       title: '虎牙主播+ H5'
    })
  ],
  optimization: {
	  splitChunks: {
		  cacheGroups: {
			  commons: {
				  name: "common",
				  chunks: "initial",
				  minChunks: 2
              }
          }
      }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
	//publicPath: '/' // 仅作为服务端时设置publicPath为/，否则浏览器端无法正确加载当前目录下文件资源，浏览器端配置时用./或者不用该publicPath字段
  },
  module: {
	rules: [
	{
		test: /\.css$/,
		use: [
		'style-loader',
		'css-loader'
		]
	},
	{
		test: /\.(png|svg|jpg|gif)$/,
		use: [
		'file-loader',
		{
		  loader: 'image-webpack-loader',
		  options: {
			mozjpeg: {
			  progressive: true,
			  quality: 65
			},
			// optipng.enabled: false will disable optipng
			optipng: {
			  enabled: false,
			},
			pngquant: {
			  quality: [0.65, 0.90],
			  speed: 4
			},
			gifsicle: {
			  interlaced: false,
			},
			// the webp option will enable WEBP
			webp: {
			  quality: 75
			}
		  }
		},
		]
	},
	{
		test: /\.(woff|woff2|eot|ttf|otf)$/,
		use: [
			'file-loader'
		]
	},
	{
		test: /\.(csv|tsv)$/,
		use: [
			'csv-loader'
        ]
	},
	{
		test: /\.xml$/,
		use: [
		'xml-loader'
		]
	},
	],
  },
};
