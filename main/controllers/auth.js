module.exports = {
    //GET /news-feed
    login(req, res) {
        res.render('auth', {
            id: 'login',
        });
    },
    
    //GET /news
    registration(req, res) {
        res.render('reg', {
            id: 'registration',
        });
    }
}