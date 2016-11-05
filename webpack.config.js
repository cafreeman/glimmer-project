const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname + '/dist'),
    libraryTarget: 'amd',
    library: 'hello',
    filename: 'hello.js'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      './node_modules',
      path.resolve('node_modules/glimmer-engine/dist/node_modules'),
      path.resolve('src'),
    ],
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'build']),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  devtool: 'cheap-module-source-map'
}