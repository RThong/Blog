const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const dotenv = require("dotenv");

const path = require("path");
const { resolve } = path;

const isDev = process.env.NODE_ENV === "development";

const PROJECT_PATH = resolve(__dirname, "../");

const dotenvFile = resolve(PROJECT_PATH, `./.env.${process.env.NODE_ENV}`);

// 加载.env*文件  默认加载.env文件
dotenv.config({
  path: fs.existsSync(dotenvFile)
    ? dotenvFile
    : resolve(PROJECT_PATH, `./.env`),
});

// 浏览器环境注入的变量
const define = {
  dev: {
    baseURL: "/api/dev",
  },
  test: {
    baseURL: "/api/test",
  },
  pro: {
    baseURL: "/api/pro",
  },
};

const config = {
  mode: isDev ? "development" : "production",
  entry: {
    app: resolve(PROJECT_PATH, "./src/index.jsx"),
  },
  output: {
    filename: `js/[name]${isDev ? "" : ".[fullhash:8]"}.js`,
    path: resolve(PROJECT_PATH, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(PROJECT_PATH, "./public/index.html"),
      filename: "index.html",
    }),
    new DefinePlugin({
      "process.env": Object.keys(define[process.env.ENV]).reduce((env, key) => {
        env[key] = JSON.stringify(define[process.env.ENV][key]);
        return env;
      }, {}),
    }),
  ],
};

const extraConfig = isDev
  ? {
      devServer: {
        host: "127.0.0.1", // 指定 host，不设置的话默认是 localhost
        port: 3000, // 指定端口，默认是8080
      },
    }
  : {};

module.exports = { ...config, ...extraConfig };
