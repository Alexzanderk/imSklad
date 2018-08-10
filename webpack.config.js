'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob').sync;
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        app: './src/js/index.js',
        google: './src/js/functions/googleMaps.js',
    },

    output: {
        filename: './public/js/[name].js',
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
            },{
                test: /\.(png|jpg|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './public/',
                        emitFile: true,
                        useRelativePath: true
                    }
                }]
            },
        ],
    },

    devtool: 'eval-source-map'
};
