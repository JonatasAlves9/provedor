const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const smp = new SpeedMeasurePlugin();
module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [ReactRefreshTypeScript()].filter(Boolean),
              }),
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: './public',
    },
    hot: true,
    historyApiFallback: true,
    port: 8085,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.dev.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
});
