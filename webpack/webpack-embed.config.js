const path = require('path')
const webpack = require('webpack')

const DIRECTORY = path.dirname(__dirname)

module.exports = {
  mode: 'production',
  entry: path.join(DIRECTORY, 'src', 'components', 'embed', 'WebPlayer.js'),
  output: {
    path: path.join(DIRECTORY, 'dist'),
    filename: 'react-native-web-player.js',
    library: 'react-native-web-player',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
}
