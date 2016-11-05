const path = require('path');
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
      // 'packages'
    ],
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          configFileName: 'webpack-tsconfig.json'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'build']),
  ]
}