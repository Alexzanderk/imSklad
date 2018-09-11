const { Category } = require('../../shared/models');

module.exports = {
    get(req, res, next, categoryId) {
        Category.findOne({_id: categoryId})
            .then(currentCategory => {
                req.currentCategory = currentCategory;
                res.locals.currentCategory = currentCategory;
                next();
            })
            .catch(err => next(err));
    }
};