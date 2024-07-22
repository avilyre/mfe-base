const path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require ("./package.json");
const dotenv = require("dotenv");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    publicPath: "/", // tha was used to fix the cannot get the url error
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "public"),
    port: 3002,
    historyApiFallback: true // that was used to fix the cannot get the url error
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-typescript",
            [
              "@babel/preset-react",
              {
                runtime: "automatic"  // that option is used to removed the import React from 'react'
              }
            ],
          ]
        }
      },
      {
        test: /\.(png|svg)$/,
        type: "asset/resource"
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, "public", "favicon.png")
    }),
    new ModuleFederationPlugin({
      name: "lestsmovieContainer",
      remotes: {
        NavbarApp: process.env.NAVBAR_REMOTE_URL,
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        }
      }
    })
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
}