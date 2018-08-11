const newsList = require('../../shared/data/news.json');
const categories = require('../../shared/data/category.json');

module.exports = {
    //GET /
    showAdminPage(req, res) {
        res.render('index', {
            id: 'admin-main',
            newsList,
            categories
        })
    }


}