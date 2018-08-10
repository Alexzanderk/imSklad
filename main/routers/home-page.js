const { Router } = require('express');
const router = Router();

const { home } = require('../controllers');

router.get('/', home.showProductsAndNews);
router.get('/about', home.showPageAbout);
router.get('/contacts', home.showPageCantacts);

module.exports = router;