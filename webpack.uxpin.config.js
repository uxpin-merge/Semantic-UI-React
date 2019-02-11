const webpack = require('webpack')

// const config = require('./config')
// const pkg = require('./package.json')

// const { paths } = config

module.exports = {
  target: 'web',
  devtool: false,
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/env', '@babel/react', 'stage-1'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-export-default-from',
              '@babel/plugin-proposal-export-namespace-from',
              '@babel/plugin-syntax-dynamic-import',
            ],
          },
        },
      },
    ],
  },
}
