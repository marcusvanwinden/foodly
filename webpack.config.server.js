const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: {
    server: path.resolve(__dirname, 'src/server'),
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
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportOnlyLocals: true,
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
        ],
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
          context: 'src/server',
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
