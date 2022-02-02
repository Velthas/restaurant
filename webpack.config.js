const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        
        {
          test: /\.(jpg|jpeg|svg|png|bmp)$/i,
          type: 'asset/resource'
        },
      ],
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), 
  },
};