const { News } = require('../../shared/models');

module.exports = {
    getNewsId(req, res, next, newsId) {
        News.findOne({_id: newsId})
            .then(currentNews => {
                req.currentNews = currentNews;
                next()
            })
            .catch(err => next(err));
    }
}