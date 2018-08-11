const { Router } = require('express');
const router = Router();

const { main } = require('../controllers');

router.get('/', main.showProductsAndNews);
router.get('/about', main.showPageAbout);
router.get('/contacts', main.showPageCantacts);

module.exports = router;