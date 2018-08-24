const categories = require('../../shared/data/category.json');

const {
    News
} = require('../../shared/models');

module.exports = {
    // GET /admin/news
    showAdminNewsPage(req, res, next) {
        let { page = 0, limit = 0, skip = page * limit - limit} = req.query;
        let pagination = { page, limit, skip }
        News.find()
            .sort({dateNews: -1})
            .skip(Number(skip))
            .limit(Number(limit))
            .then(news => {
                res.render('news', {
                    id: 'admin-news',
                    news,
                    pagination,
                    categories
                });
            })
            .catch(err => next(err))
    },

    //GET /admin/news/create
    showCreatePage(req, res) {

        res.render('news/form', {
            id: 'admin-news-create',
            news: new News(),
            categories
        })
    },

    //POST /admin/news/create
    createNews(req, res) {
        let newsCreate = Object.assign({}, req.body, {
            published: (req.body.published === 'on') ? true : false,
            image: req.file ? req.file.filename : ''
        });
        console.log(req.file);

        News.create(newsCreate)
            .then(news => {
                res.redirect('/admin/news?page=1&limit=10')
            });
    },

    //GET /admin/news/:idNews/edit
    showNewsEdit(req, res, next) {
        res.render('news/form', {
            id: 'admin-news-edit',
            news: req.currentNews,
            categories
        })
    },
    //POST /admin/news/:idNews/edit
    updateNews(req, res, next) {
        let newsUpdate = Object.assign({}, req.body, {
            published: (req.body.published === 'on') ? true : false,
            image: req.file ? req.file.filename : req.currentNews.image
        });
        
        News.findOneAndUpdate({
                _id: req.params.newsId
            }, newsUpdate)
            .then(() => res.redirect('/admin/news?page=1&limit=10'))
            .catch(err => next(err));
    },

    showNewsDelete(req, res) {
        res.render('news/delete', {
            id: 'admin-news-delete',
            categories
        })
    },

    fakes(req, res) {
        let num = req.params.num;

        for (let index = 0; index < num; index++) {
            let fake = new News({
                title: `Fake title ${index}`,
                description: `Fake description ${index}`,
                fullDescription: `full Description ${index}`,
                published: true

            })
            fake.save();
        }
        
        res.redirect('/admin/news?page=1&limit=10');

    }
}