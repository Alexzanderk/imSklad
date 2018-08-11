const { Router } = require('express');
const router = new Router();

const { home } = require('../controllers');

router.get('/', home.showAdminPage);

module.exports = router;
