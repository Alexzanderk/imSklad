const { Router } = require('express');
const router = new Router();
const path = require('path');

const { catalog } = require('../controllers');
const { categoryId, productId } = require('../middleware');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..', '..', 'shared', 'public', 'upload'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() +'-' + file.originalname);
    }
});

const upload = multer({storage: storage}).single('image');

router.param('categoryId', categoryId.get);
router.param('productId', productId.get);

router.get('/', catalog.showAdminCatalogPage);

router.post('/units/create', catalog.createUnits);
router.post('/units/delete', catalog.deleteUnit);
router.get('/units/get', catalog.getUnit);
router.get('/category/get', catalog.categoryGet);

router.route('/category/create')
    .get(catalog.showAdminCategoryCreatePage)
    .post(upload, catalog.createCetegory);

router.route('/category/props/:categoryId')
    .get(catalog.showAdminCategoryProps)
    .post(catalog.addCategoryProps);

router.route('/product/create')
    .get(catalog.showAdminProductCreatePage)
    .post(upload, catalog.createProduct);

router.route('/product/:productId/edit')
    .get(catalog.showProductEditPage)
    .post(upload, catalog.updateProduct);

router.route('/product/:productId/delete')
    .get(catalog.showProductDeletePage)
    .post(catalog.deleteProduct);

module.exports = router;