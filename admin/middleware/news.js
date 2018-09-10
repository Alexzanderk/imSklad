const { News } = require('../../shared/models');

module.exports = {
    get(req, res, next, newsId) {
        News.findOne({_id: newsId})
            .then(currentNews => {
                req.currentNews = currentNews;
                res.locals.currentNews = currentNews;
                next();
            })
            .catch(err => next(err));
    }
};