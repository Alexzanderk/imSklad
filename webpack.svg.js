'use strict';

const path = require('path');
const glob = require('glob').sync;
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = [
    {
        entry: {
            sprite: glob('./src/img/ico/*.svg')
        },
        output: {
            filename: '../[name].js',
            path: path.resolve(__dirname, 'public/img/ico')
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
    }]