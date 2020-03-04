const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
	  app: './src/index.js'
//	  print: './src/print.js'
  },
  devtool: 'inline-source-map', // ��������ʱʹ�ã����ڸ��ٴ���ʱλ��
  devServer: {
	  contentBase: './dist',
	  hot: true
  },
  plugins: [
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
       title: 'Output Management'
    }),
	new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
	//publicPath: '/' // ����Ϊ�����ʱ����publicPathΪ/��������������޷���ȷ���ص�ǰĿ¼���ļ���Դ�������������ʱ��./���߲��ø�publicPath�ֶ�
  },
  mode: "production",
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
