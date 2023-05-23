const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'src'),
    port: 8080,
    open: true,
    hot: true,
  },
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: {
      keep: /\.git/,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // import한 파일을 자동인식 해준다. app만 입력해도 app.js/ts 를 불러옴
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    // CleanWebpackPlugin는 빌드파일을 이전 빌드 결과물을 안전하게 삭제한다.
    new CleanWebpackPlugin(),
    // 번들링한 결과물을 html파일에 추가하여 최종 html파일을 생성한다.
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
