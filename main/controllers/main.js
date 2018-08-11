const newsList = require('../../shared/data/news.json');
const categories = require('../../shared/data/category.json');

module.exports = {

    //GET /
    showProductsAndNews(req, res) {
        
        res.render('index', {
            id: 'main',
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