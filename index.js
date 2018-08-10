const express = require('express');
const path = require('path');
const loger = require('morgan');

const config = require('./config');

const main = require('./main');

const server = express();

server.disabled('view cache');
server.set('views', './views')
server.set('view engine', 'pug');

server.locals.version = config.version;

server.use(express.static(config.paths.public));

server.use('/', main);

server.listen(3000,() => console.log('Start server on port 3000'))