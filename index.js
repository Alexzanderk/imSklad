const express = require('express');
const path = require('path');
const loger = require('morgan');

const config = require('./shared/config');

const main = require('./main');

const server = express();

server.disabled('view cache');
server.set('views', './views')
server.set('view engine', 'pug');

server.locals.version = config.version;

server.use(express.static(config.paths.public));

server.use('/', main);

server.listen(config.port,() => console.log(`Start server on port ${config.port}`));