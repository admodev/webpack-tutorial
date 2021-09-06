const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-react",
                {
                  runtime: "automatic", // classic
                },
              ],
            ],
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    devServer: {
      open: true, // Abrir el navegador
      port: 3000,
      compress: true,
    },
    devtool: "source-map",
  };
};
