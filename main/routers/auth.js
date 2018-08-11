const { Router } = require('express');
const router = Router();

const { auth } = require('../controllers');

router.get('/login', auth.login);
router.get('/registration', auth.registration);

module.exports = router;