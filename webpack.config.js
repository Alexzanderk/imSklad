'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob').sync;
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = [
    {
        entry: {
            sprite: glob('./src/img/ico/*.svg')
        },
        output: {
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
              {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: path.resolve(__dirname, 'src/img/ico'),
                options: {
                  extract: true,
                  spriteFilename: 'ico.svg'
                },
              },
            ],
          },
        
          plugins: [
            new SpriteLoaderPlugin()
          ]
    },
    {
    entry: {
        app: './src/js/index.js',
        google: './src/js/functions/googleMaps.js'
    },

    output: {
        filename: '[name].js'
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
            template: path.resolve(__dirname, 'src/views') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'auth.html',
            template: path.resolve(__dirname, 'src/views') + '/auth.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration.html',
            template: path.resolve(__dirname, 'src/views') + '/reg.pug'
        }),
        new HtmlWebpackPlugin({
            filename: '404.html',
            template: path.resolve(__dirname, 'src/views') + '/404.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'catalog.html',
            template: path.resolve(__dirname, 'src/views', 'catalog') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'catalog-products.html',
            template: path.resolve(__dirname, 'src/views', 'catalog-products') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: path.resolve(__dirname, 'src/views', 'product') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'news-feed.html',
            template: path.resolve(__dirname, 'src/views', 'news-feed') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: path.resolve(__dirname, 'src/views', 'news') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: path.resolve(__dirname, 'src/views', 'about') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            template: path.resolve(__dirname, 'src/views', 'contacts') + '/index.pug'
        }),
    ],

    devtool: 'eval-source-map'
},

// {
//     entry: './src/styles/index.sass',

//     output: {
//         filename: 'style-bundle.js'
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