var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './client/js/main.js',
    output: {
        path: path.join(__dirname,'dist'),
        publicPath: '/client',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
              test: /\.css?|\.scss$/,
              loader: ['style-loader', 'css-loader']
          }
        ]
      }
};
