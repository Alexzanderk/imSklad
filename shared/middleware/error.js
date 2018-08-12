const { NotFoundError } = require('./../utils/error.js');

module.exports = {
    notFound(req, res, next) {
        next(new NotFoundError('Вы попали не страницу которой, НЕТ! Оправляйтесь домой!'));
    },

    development(error, req, res, next) {
        res.status(error.status).render('404', {
            id: 'error',
            title: 'Ошибка',
            error
        });
    },

    production(error, req, res, next) {
        res.status(error.status).render('404', {
            id: 'error',
            title: 'Ошибка',
            message: {
                title: error.title,
                message: error.message
            }
            
        });
    }

}