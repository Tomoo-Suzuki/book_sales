const path = require("path");
const webpack = require("webpack");

module.exports = {
  watch: true,
  mode: "development",
  entry: {
    book: "./src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    open: true, //ブラウザを自動で開く
    hot: true,
    inline: true,
    openPage: "index.html", //自動で指定したページを開く
    contentBase: path.join(__dirname, "public"), // HTML等コンテンツのルートディレクトリ
    watchContentBase: true, //コンテンツの変更監視をする
    historyApiFallback: true,
    port: 8888, // ポート番号
    host: "0.0.0.0", //dockerと連携する時に
  },
  module: {
    rules: [{
        test: /\.txt$/,
        use: "raw-loader",
      },
      // {
      //   test: [/\.js$/, /\.jsx$/],
      //   exclude: /node_modules/,
      //   use: "babel-loader",
      // },
      {
        test: [/\.tsx$/],
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: [/\.jpe?g/, /\.png/, /\.svg/, /\.gif/, /\.ico/],
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".scss",
      ".css",
      ".json",
      ".txt",
    ],
    alias: {
      _container: path.resolve(__dirname, "src/container"),
      _components: path.resolve(__dirname, "src/components"),
      _redux: path.resolve(__dirname, "src/redux"),
      _img: path.resolve(__dirname, "img"),
      _scss: path.resolve(__dirname, "src/scss"),
      _lib: path.resolve(__dirname, "src/lib"),
      _queries: path.resolve(__dirname, "src/queries"),
      _dummy: path.resolve(__dirname, "dummy"),
      _types: path.resolve(__dirname, "src/types"),
    },
  },
  /*,
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: "shared", // チャンク名
        minChunks: 2
      })
    ]*/
};