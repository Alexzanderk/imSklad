const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const config = require('./webpack.config');


module.exports = merge(config, {
    module: {
        rules: [{
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
                    options: {
                        name: 'bundle.css',
                    },
                },
                {
                    loader: 'extract-loader'
                },
                // {
                //     loader: 'style-loader'
                // },
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
        new HtmlWebpackPlugin({
            filename: 'admin.html',
            template: path.resolve(__dirname, 'src/views', 'admin') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'admin-news.html',
            template: path.resolve(__dirname, 'src/views', 'admin/news') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'admin-company.html',
            template: path.resolve(__dirname, 'src/views', 'admin/company') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'admin-clients.html',
            template: path.resolve(__dirname, 'src/views', 'admin/clients') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'admin-catalog.html',
            template: path.resolve(__dirname, 'src/views', 'admin/catalog') + '/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'admin-edit.html',
            template: path.resolve(__dirname, 'src/views', 'admin/news') + '/form.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'admin-delete.html',
            template: path.resolve(__dirname, 'src/views', 'admin/news') + '/delete.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'admin-create.html',
            template: path.resolve(__dirname, 'src/views', 'admin/news') + '/form.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'admin-create-product.html',
            template: path.resolve(__dirname, 'src/views', 'admin/catalog') + '/form.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'admin-create-props.html',
            template: path.resolve(__dirname, 'src/views', 'admin/catalog') + '/form-props.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'admin-create-category.html',
            template: path.resolve(__dirname, 'src/views', 'admin/catalog') + '/form-category.pug'
        }),
    ],

    devtool: 'eval-source-map'
})