const { Router } = require('express');
const router = new Router();

const { client } = require('../controllers');

router.get('/', client.showAdminClientPage);

module.exports = router;