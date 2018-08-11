const newsList = require('../data/news.json');
const categories = require('../data/category.json');

module.exports = {

    //GET /
    showProductsAndNews(req, res) {
        
        res.render('index', {
            id: 'main-page',
            newsList,
            categories
        });
    },
    
    showPageAbout(req, res) {

        res.render('about',{
            id: 'about',
            newsList,
            categories
        })
    },

    showPageCantacts(req, res) {
        res.render('contacts', {
            id: 'contacts',
            newsList,
            categories
        })
    }
    
}