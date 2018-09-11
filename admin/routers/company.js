const { Router } = require('express');
const router = new Router();

const { company } = require('../controllers');

router.route('/')
    .get(company.showAdminCompanyPage)
    .post(company.addInformation);

module.exports = router;