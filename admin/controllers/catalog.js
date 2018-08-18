const categories = require('../../shared/data/category.json');

module.exports = {
    //GET /
    showAdminCatalogPage(req, res) {
        res.render('catalog', {
            id: 'admin-catalog',
            categories
        })
    },

    // GET /admin/catalog/category/create
    showAdminCategoryCreatePage(req, res) {
        res.render('catalog/form-category', {
            id: 'admin-catalog',
            categories
        })
    },
    
    // GET /admin/catalog/category/props
    showAdminCategoryProps(req, res) {
        res.render('catalog/form-props', {
            id: 'admin-catalog',
            categories
        })
    },

    // GET /admin/catalog/category/create
    showAdminProductCreatePage(req, res) {
        res.render('catalog/form', {
            id: 'admin-catalog',
            categories
        })
    }
}