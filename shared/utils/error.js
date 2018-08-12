module.exports = {
    NotFoundError: class NotFoundError extends Error {
        constructor(message = 'That\'s a 404. We assume you know what it means by now.') {
            super(message);

            this.name = 'NotFoundError';
            this.title = 'УУУППССС!!!'
            this.status = 404;
        }
    }
};