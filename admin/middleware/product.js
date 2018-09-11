const { Product } = require('../../shared/models');

module.exports = {
    get(req, res, next, productId) {
        Product.findOne({_id: productId})
            .then(currentProduct => {
                req.currentProduct = currentProduct;
                res.locals.currentProduct = currentProduct;
                next();
            })
            .catch(err => next(err));
    }
};