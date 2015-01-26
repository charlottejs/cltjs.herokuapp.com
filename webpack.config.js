var path = require('path');
var webpack = require('webpack');

// build css
require('./scripts/rcss');

var entries = require('fs').readdirSync('./views/client').reduce(function(o, n) {
  o[n.replace('.jsx', '')] = './views/client/' + n;
  return o;
}, {});

module.exports = {
  entry: entries,
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join('public', 'js'),
    publicPath: '/js/'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  },
  alias: {
    extendStyles: './lib/extendStyles',
  },
  plugins: [],
  watch: process.env.NODE_ENV !== 'production'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({})
  );
  module.exports.plugins.push(
    new webpack.optimize.CommonsChunkPlugin('common.js')
  );
  module.exports.plugins.push(
    new webpack.DefinePlugin({
      "process.env": {NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')}
    })
  );
}
else {
  module.exports.plugins.push(
    new webpack.DefinePlugin({
      "process.env": {NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')}
    })
  );
}
