const express = require('express');
const path = require('path');

const routers = require('./routers');

const main = express();

const newsList = require('./data/news.json');
const categories = require('./data/category.json');

main.set('views', path.resolve(__dirname, 'views'));
main.set('view engine', 'pug');

main.on('mount', server => {
    main.locals = Object.assign(server.locals, main.locals);
});

main.use('/', routers.main);
// main.use('/auth', routers.auth);
main.use('/news-feed', routers.news);
main.use('/catalog', routers.catalog);

module.exports = main;