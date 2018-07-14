'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
    entry: {
        app: "./src/js/index.js",
        google: './src/js/functions/googleMaps.js'
    },

    output: {
        filename: "[name].js"
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.pug$/,
            use: {
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        }, {
            test: /\.s[ca]ss$/,
            use: [
                {
                    loader: 'file-loader',
                    options: { name: 'bundle.css', },
                },
                { loader: 'extract-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        // sourceMap: true`
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        includePaths: ['./node_modules'],
                        sourceMap: true
                    }
                },
            ]
        }, {
            test: /\.(png|jpg|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './public/img/',
                    emitFile: true,
                    useRelativePath: true
                }
            }]
        }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/views") + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'auth.html',
            template: path.resolve(__dirname, "src/views") + '/auth.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration.html',
            template: path.resolve(__dirname, "src/views") + '/reg.pug'
        }),
        new HtmlWebpackPlugin({
            filename: '404.html',
            template: path.resolve(__dirname, "src/views") + '/404.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'catalog.html',
            template: path.resolve(__dirname, "src/views", 'catalog') + '/index.pug'
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'product.html',
        //     template: path.resolve(__dirname, "src/views") + '/product.pug'
        // }),
        new HtmlWebpackPlugin({
            filename: 'news-feed.html',
            template: path.resolve(__dirname, "src/views", 'news-feed') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: path.resolve(__dirname, "src/views", 'news') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: path.resolve(__dirname, "src/views", 'about') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            template: path.resolve(__dirname, "src/views", 'contacts') + '/index.pug'
        }),
    ],

    devtool: 'eval-source-map'
},
// {
//     entry: "./src/styles/index.sass",

//     output: {
//         filename: "style-bundle.js"
//     },
//     module: {
//         rules: [{
//             test: /\.s[ca]ss$/,
//             use: [
//                 {
//                     loader: 'file-loader',
//                     options: {
//                         name: 'bundle.css',

//                     },
//                 },
//                 { loader: 'extract-loader' },
//                 { loader: 'css-loader' },
//                 {
//                     loader: 'sass-loader',
//                     options: {
//                         includePaths: ['./node_modules']
//                     }
//                 },
//             ]
//         },
//         ],
//     },
// }
];