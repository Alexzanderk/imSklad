const categories = require('../../shared/data/category.json');

module.exports = {
    //GET /
    showAdminPage(req, res) {
        res.render('index', {
            id: 'admin-main',
            categories
        });
    }
};