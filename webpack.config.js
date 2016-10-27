const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: [
      'src/index.ts'
    ]
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['', '.ts', '.js', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
}