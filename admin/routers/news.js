const { Router } = require('express');
const router = new Router();

const { newsId } = require('../middleware');
const { news } = require('../controllers');

router.param('newsId', newsId.getNewsId);

router.get('/', news.showAdminNewsPage);
router.route('/create')
    .get(news.showCreatePage)
    .post(news.createNews);
router.route('/:newsId/edit')
    .get(news.showNewsEdit)
    .post(news.updateNews);
router.get('/:newsId/delete', news.showNewsDelete);

router.get('/fakes/:num', news.fakes)

module.exports = router;
