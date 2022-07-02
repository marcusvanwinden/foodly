const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    client: path.resolve(__dirname, 'client/client.tsx'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.client.json',
        },
        test: /\.tsx?$/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  name: 'client',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname + '/dist/static'),
    publicPath: '',
  },
  plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  target: 'web',
};
