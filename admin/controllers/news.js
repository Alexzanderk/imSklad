const newsList = require('../../shared/data/news.json');
const categories = require('../../shared/data/category.json');

module.exports = {
    // GET /news
    showAdminNewsPage(req, res) {
        res.render('news', {
            id: 'admin-news',
            newsList,
            categories
        });
    },

    showNewsEdit(req, res) {
        res.render('news/form', {
            id: 'admin-news-edit',
            newsList,
            categories
        })
    },

    showNewsDelete(req, res) {
        res.render('news/delete', {
            id: 'admin-news-delete',
            newsList,
            categories
        })
    },

    
}