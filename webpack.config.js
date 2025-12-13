const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.web.tsx", // use web entry
  output: {
    path: path.resolve(__dirname, "web-dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      "react-native$": "react-native-web",
    },
    extensions: [
      ".web.tsx",
      ".web.ts",
      ".tsx",
      ".ts",
      ".web.js",
      ".jsx",
      ".js",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [
          path.resolve(__dirname), // include full project folder
          path.resolve(__dirname, "node_modules/react-native-web"),
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
                  [
                      "@babel/preset-react",
                      {
                          runtime: "automatic"
                      }
                  ],
              "@babel/preset-typescript",
            ],
            plugins: ["react-native-web"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    client: {
        logging: "error", // only show errors, hides most info logs
    },
    devMiddleware: {
        stats: "minimal"  // reduces bundler logs in console
    }
  },
};
