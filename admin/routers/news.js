const { Router } = require('express');
const path = require('path');
const router = new Router();

const { newsId } = require('../middleware');
const { news } = require('../controllers');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..', '..', 'shared', 'public', 'upload'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() +'-' + file.originalname);
    }
});


const upload = multer({storage: storage}).single('image');

router.param('newsId', newsId.getNewsId);

router.get('/', news.showAdminNewsPage);
router.route('/create')
    .get(news.showCreatePage)
    .post(upload, news.createNews);
router.route('/:newsId/edit')
    .get(news.showNewsEdit)
    .post(upload, news.updateNews);
router.get('/:newsId/delete', news.showNewsDelete);

router.get('/fakes/:num', news.fakes)

module.exports = router;
