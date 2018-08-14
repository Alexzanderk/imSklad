const { Router } = require('express');
const router = new Router();

const { company } = require('../controllers');

router.get('/', company.showAdminCompanyPage);

module.exports = router;