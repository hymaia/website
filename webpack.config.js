const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/app.ts', // Entry point for your application
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.js'], // Add `.ts` and `.js` as resolvable extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Regex to match TypeScript files
        exclude: /node_modules/, // Exclude dependencies
        use: 'ts-loader', // Use ts-loader for TypeScript files
      },
      {
        test: /\.js$/, // Regex to match JavaScript files
        exclude: /node_modules/, // Exclude dependencies
        use: 'babel-loader', // Use Babel loader for JavaScript files
      },
      {
        test: /\.css$/, // Regex to match CSS files
        use: ['style-loader', 'css-loader'], // Loaders for CSS files
      },
      // Add more rules as needed
    ]
  },
  devtool: 'inline-source-map', // Source maps for easier debugging
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9001,
    historyApiFallback: true, // Enables support for HTML5 History API based routing
    hot: true, // Enables hot module replacement
    open: true, // Opens the browser after the server is started
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // Template for the HTML file
    }),
    new webpack.HotModuleReplacementPlugin(), // Plugin for hot module replacement
  ],
};
