const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js",
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: [
                  /node_modules/
                ]
            },
            {
                test: /\.css$/,
                use: ["css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '/dist'),
        hot: true,
        port: 8000
    }
}

