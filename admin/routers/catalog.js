const { Router } = require('express');
const router = new Router();

const { catalog } = require('../controllers');

router.get('/', catalog.showAdminCatalogPage);
router.get('/category/create', catalog.showAdminCategoryCreatePage);
router.get('/category/props', catalog.showAdminCategoryProps);
router.get('/product/create', catalog.showAdminProductCreatePage);

module.exports = router;