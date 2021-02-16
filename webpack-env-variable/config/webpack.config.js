const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const path = require("path");
const { resolve } = path;

const isDev = process.env.NODE_ENV === "development";

const PROJECT_PATH = resolve(__dirname, "../");

console.log("【base_api】", process.env.ENV);

const define = {
  dev: {
    BASE_API: "/api/dev",
  },
  test: {
    BASE_API: "/api/test",
  },
  pro: {
    BASE_API: "/api/pro",
  },
};

const config = {
  entry: {
    app: resolve(PROJECT_PATH, "./src/index.jsx"),
  },
  output: {
    filename: `js/[name]${isDev ? "" : ".[hash:8]"}.js`,
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
