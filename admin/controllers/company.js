const newsList = require('../../shared/data/news.json');
const categories = require('../../shared/data/category.json');

module.exports = {
    
    //GET /admin/company
    showAdminCompanyPage(req, res) {
        res.render('company', {
            id: 'admin-company',
            newsList,
            categories
        })
    }

}