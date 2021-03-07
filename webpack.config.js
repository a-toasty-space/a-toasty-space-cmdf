const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    /* Copy files from src to dist */
    new CopyWebpackPlugin([ 
      './src/index.html',
      './src/style.css',
      /* Add an additional files to copy to dist here */
    ])
  ]
};
