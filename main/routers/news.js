const { Router } = require('express');
const router = Router();

const { news } = require('../controllers');

router.get('/', news.showNewsFeed);
router.get('/:newsId', news.showNews);

module.exports = router;