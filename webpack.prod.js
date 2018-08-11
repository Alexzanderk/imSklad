'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const config = require('./webpack.config');


module.exports = merge(config, {

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

    devtool: none,

})