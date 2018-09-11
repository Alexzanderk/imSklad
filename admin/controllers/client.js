const categories = require('../../shared/data/category.json');

module.exports = {
    showAdminClientPage(req, res) {
        res.render('clients', {
            id: 'admin-clients',
            categories
        });
    },
};
