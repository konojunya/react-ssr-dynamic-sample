const webpack = require("webpack");
const path = require("path");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

const plugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || "local")
    },
    "process.title": JSON.stringify("browser")
  }),
  new webpack.optimize.ModuleConcatenationPlugin()
];

module.exports = {
  target: "web",
  mode: IS_PRODUCTION ? "production" : "development",
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  entry: "./client/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "bundle.js",
    chunkFilename: "[name].js",
    sourceMapFilename: "[name].js.map",
    publicPath: `/static/`
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /dist/],
        use: [
          {
            loader: "thread-loader",
            options: {
              workers: require("os").cpus().length - 1,
              workerParallelJobs: 40
            }
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.client.json",
              transpileOnly: true,
              happyPackMode: true
            }
          }
        ]
      }
    ]
  },
  devtool: IS_PRODUCTION ? false : "#source-map",
  stats: "minimal",
  optimization: {
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          enforce: true
        }
      }
    },
    concatenateModules: true
  },
  plugins
};
