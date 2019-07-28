const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/images"
            }
          }
        ]
      },
      {
        test: /\.(ogg|wav|)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/audio"
            }
          }
        ]
      }
    ]
  }
};
