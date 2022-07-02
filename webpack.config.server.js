const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: {
    server: path.resolve(__dirname, 'server/server.ts'),
  },
  externals: [nodeExternals()],
  mode: 'production',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.server.json',
        },
        test: /\.tsx?$/,
      },
    ],
  },
  name: 'server',
  node: {
    __dirname: false,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: 'server',
          from: 'views',
          to: 'views',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  target: 'node',
};
