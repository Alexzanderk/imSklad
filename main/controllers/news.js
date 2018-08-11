const newsList = require('../data/news.json');
const categories = require('../data/category.json');

module.exports = {
    //GET /news-feed
    showNewsFeed(req, res) {
        res.render('news-feed', {
            id: 'news-feed',
            newsList,
            categories
        });
    },
    
    //GET /news
    showNews(req, res) {
        res.render('news', {
            id: 'news',
            newsId: req.params.newsId,
            newsList,
            categories
        });
    }
}