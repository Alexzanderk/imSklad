const { Company } = require('../../shared/models');

module.exports = {
    
    //GET /admin/company
    showAdminCompanyPage(req, res) {
        Company.findOne()
            .then(company => {
                if (!company) {
                    Company.create(new Company())
                        .then(company => {
                            res.render('company', {
                                id: 'admin-company',
                                company
                            });
                        })
                        .catch(err => console.error(err));
                } else {
                    console.log(company);
                    res.render('company', {
                        id: 'admin-company',
                        company
                    });
                }
            })
            .catch(err => console.error(err));
    },

    addInformation(req, res) {
        let { name, about, delivery, adress, tel, email } = req.body;
        
        if (tel instanceof Array) tel = tel.filter(el => el != '');
        if (email instanceof Array) email = email.filter(el => el != '');
        
        let data = Object.assign({}, { name, about, delivery, contacts: {adress, tel, email}});
        Company.findOneAndUpdate({}, data)
            .then( () => res.redirect('/admin/company/'))
            .catch(console.error);
    }

};