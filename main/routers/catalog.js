const { Router } = require('express');
const router = Router();

const {catalog} = require('../controllers');

//GET /catalog
router.get('/', catalog.showCatalog);

//GET /:categoryId
router.get('/:categoryId', catalog.showCategoryProducts);
//GET /:productId
router.get('/:categoryId/:productId', catalog.showProduct);

module.exports = router;