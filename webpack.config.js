module.exports = {
  entry: [
    './app/index.jsx'
  ],

  output: {
    path: './public',
    publicPath: "/",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },

  devtool: 'cheap-source-map',
  devServer: {
    contentBase: './public',
  }
};
