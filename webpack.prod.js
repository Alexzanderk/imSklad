'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const config = require('./webpack.config');


module.exports = merge(config, {
    module: {
        rules: [{
            test: /\.s[ca]ss$/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'app.css',
                        outputPath: './public/style/'
                    },
                },
                {
                    loader: 'extract-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
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
        }],
    },

    plugins: [
        new CopyWebpackPlugin([{
                from: './src/views',
                to: './views',
                ignore: ['admin/**']
            },
            {
                from: './src/img',
                to: './public/img'
            }
        ])
    ],


})