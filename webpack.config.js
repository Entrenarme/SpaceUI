const path = require('path');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const mode = process.env.NODE_ENV;

const files = glob.sync('./src/lib/**/index.js');
// const files = [
//   './src/lib/core/TextField/index.js',
//   './src/lib/core/Button/index.js',
// ];
const filesObject = files.reduce((prev, curr) => {
  //   console.log(curr);
  const splitted = curr.split('/');
  const filename = splitted[splitted.length - 2];
  //   const filenameWithoutExtension = filename.split('.')[0];
  //   console.log(filenameWithoutExtension.toUpperCase());
  return { ...prev, [filename]: curr };
}, {});

// console.log(filesObject);

module.exports = {
  entry: filesObject,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'space-ui',
    libraryTarget: 'commonjs2',
  },
  mode,
  externals: [/lodash/, /react/, /styled-components/],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './package.json' }]),
    new CleanWebpackPlugin('dist'),
  ],
};
