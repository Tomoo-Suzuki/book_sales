const path = require('path');
const webpack = require('webpack');

module.exports = {
  watch: true,
  mode: 'development',
  entry: {
    pc: './src/container/Bookshelf.jsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    open: true, //ブラウザを自動で開く
    hot:true,
    inline:true,
    openPage: "index.html", //自動で指定したページを開く
    contentBase: path.join(__dirname, 'dist'), // HTML等コンテンツのルートディレクトリ
    watchContentBase: true, //コンテンツの変更監視をする
    port: 8888, // ポート番号
  },
  module: {
    rules: [{
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.ts', '.css', '.json', '.txt'],
    alias: {
      entrypoint: path.resolve(__dirname, 'src/entrypoint'),
      scss: path.resolve(__dirname, 'scss'),
      components: path.resolve(__dirname, 'src/components'),
      lib: path.resolve(__dirname, 'lib'),
      img: path.resolve(__dirname, 'img'),
      scss: path.resolve(__dirname, 'src/scss'),
      util: path.resolve(__dirname, 'src/util'),
      dummy: path.resolve(__dirname, 'dummy')
    }
  }
  /*,
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: "shared", // チャンク名
        minChunks: 2
      })
    ]*/
};