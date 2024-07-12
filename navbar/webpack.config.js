const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "public"),
    port: 3001
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, "public", "favicon.png")
    }),
    new ModuleFederationPlugin({
      name: "NavbarApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Navbar": "./src/app.tsx"
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
        },
        "react-router-dom": {
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