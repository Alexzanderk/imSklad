const express = require('express');
const loger = require('morgan');
const session = require('express-session');
const browserSync = require('browser-sync');

const config = require('./shared/config');
const { error, items } = require('./shared/middleware');
const { connection } = require('./shared/service/db');
const main = require('./main');
const admin = require('./admin');
const menu = require('./shared/data/menu.json');

const server = express();

server.set('view engine', 'pug');
server.set('views', config.paths.viwes);
server.set('config', config);
server.set('port', config.port);

server.locals.basedir = config.paths.viwes;
server.locals.version = config.version;
server.locals.menu = menu;

server.use(express.static(config.paths.public));
server.use('/lib', express.static(config.paths.lib));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(loger('dev'));
server.use(session({
    name: 'flashSession',
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
}));

server.use(
    items.allNews,
    items.publishedNews
);

server.use('/', main);
server.use('/admin', admin);

server.use(error.notFound);
server.use(server.get('env') === 'development' ? error.development : error.production);

server.listen(config.port, () => {
    console.log(`Start server on localhost:${config.port}`);

    // browserSync({
    //     proxy: 'localhost:' + config.port,
    //     files: ['public/**/*.{js, css}', '/shared/public/**/*.{js, css}'],
    //     startPath: '/admin/catalog/'
    // });

    // browserSync.watch('./shared/public/**/*').on('change', browserSync.reload);

});