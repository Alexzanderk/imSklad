const { Router } = require('express');
const router = new Router();

const { news } = require('../controllers');

router.get('/', news.showAdminNewsPage);
router.get('/edit', news.showNewsEdit);
router.get('/delete', news.showNewsDelete);


module.exports = router;
