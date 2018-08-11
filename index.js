const express = require('express');
const path = require('path');
const loger = require('morgan');

const config = require('./shared/config');

const main = require('./main');
const admin = require('./admin');

const server = express();

server.locals.basedir = config.paths.viwes; //
server.locals.version = config.version;

server.use(express.static(config.paths.public));

server.use('/', main);
server.use('/admin', admin);

server.listen(config.port,() => console.log(`Start server on port ${config.port}`));