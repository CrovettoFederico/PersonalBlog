const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const glob = require("glob");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpack = require("webpack");

// Utiliza glob para buscar todos los archivos .tsx en subcarpetas de src
const entries = glob.sync("src/**/*.tsx").reduce((acc, file) => {
  const name = path.relative("src", file).replace(/\.tsx$/, ""); // Genera la clave relativa a src
  acc[name] = `./${file}`;
  return acc;
}, {});

module.exports = {
  entry: entries,
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // Esto conserva la estructura del nombre del chunk
    publicPath: '/dist/',
  },
  devServer: {
    port: 3001,
    server: "https"
  },
  plugins: [
    new CopyWebpackPlugin({
        patterns: [{ from: "**/*.html", context: "src" },{ from: './images', to: 'images', context: "src" }, {context: "src", from: './assets', to: 'assets' },]
    }),
    new NodePolyfillPlugin(),
    new webpack.ProvidePlugin({
        process: 'process/browser.js',
        Buffer: ['buffer', 'Buffer'],
    }),
],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom')
    },
    fallback: {
        stream: require.resolve("stream-browserify"),
        net: false,
        tls: false
    }
  },
};
