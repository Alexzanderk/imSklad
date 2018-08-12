const express = require('express');
const path = require('path');
const loger = require('morgan');

const config = require('./shared/config');
const { error } = require('./shared/middleware');
const menu = require('./shared/data/menu.json');

const main = require('./main');
const admin = require('./admin');

const server = express();

server.set('view engine', 'pug');
server.set('views', config.paths.viwes);
server.set('config', config);
server.set('port', config.port);

server.locals.basedir = config.paths.viwes;
server.locals.version = config.version;
server.locals.menu = menu;

server.use(express.static(config.paths.public));
server.use(loger('dev'));

server.use('/', main);
server.use('/admin', admin);

server.use(error.notFound);
server.use(server.get('env') === 'development' ? error.development : error.production);

server.listen(config.port,() => console.log(`Start server on port ${config.port}`));