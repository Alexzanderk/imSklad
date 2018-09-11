const { News } = require('../models');
const moment = require('moment');

module.exports = {
    allNews(req, res, next) {
        News.find({ published: true })
            .sort({ dateNews: 1 })
            .then(newsListPublished => {
                res.locals.newsListPublished = newsListPublished;
                res.locals.moment = moment;
                next();
            })
            .catch(err => next(err));
    },

    publishedNews(req, res, next) {
        News.find()
            .then(allNews => {
                res.locals.allNews = allNews;
                next();
            })
            .catch(err => next(err));
    }
};