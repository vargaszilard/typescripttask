const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts", // Entry point of your TypeScript application
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  resolve: {
    extensions: [".ts", ".js"], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
