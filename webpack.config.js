const webpack = require('webpack');

let PLUGINS = [
  // materialize dependency
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })
];
if (process.env.NODE_ENV === 'production') {
  PLUGINS.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: './client/entry.js',
  output: {
    path: __dirname + '/a-painter',
    filename: 'build.js'
  },
  plugins: PLUGINS,
  devServer: {
    disableHostCheck: true
  },
  module: {
        rules: [
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["url-loader"] },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["url-loader"] },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.html$/, use: ["html-loader"] }
        ]
    }
};
