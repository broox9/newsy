const path = require('path');

module.exports = (env = 'development') => {
  return {
    context: path.resolve(__dirname, './src'),
    devtool: 'cheap-source-map',
    entry: './index.js',
    output: {
      filename: 'app.bundle.js',
      path: path.resolve(__dirname, './dist')
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
  }
}