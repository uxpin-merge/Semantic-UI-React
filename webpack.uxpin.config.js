const path = require('path')

module.exports = {
  entry: './',
  target: 'web',
  devtool: false,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'theme')],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: {
                before: 'link',
              },
            },
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(svg|gif|jpe?g|png)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
}
