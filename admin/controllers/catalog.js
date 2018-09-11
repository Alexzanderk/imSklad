const { Category, Unit, Product } = require('../../shared/models');

module.exports = {
    //GET /
    showAdminCatalogPage(req, res) {

        Promise.all([Category.find(), Unit.find(), Product.find()])
            .then(response => {
                let [categories, units, products] = response;
                res.render('catalog', {
                    id: 'admin-catalog',
                    categories,
                    products,
                    units: !units ? new Unit() : units.map(unit => unit.name)
                });
            })
            .catch(console.error);
    },

    // GET /admin/catalog/category/get
    categoryGet(req, res) {
        Category.find()
            .then(category => res.status(200).json(category))
            .catch(err => console.error(err));
    },

    // GET /admin/catalog/category/create
    showAdminCategoryCreatePage(req, res) {
        res.render('catalog/form-category', {
            id: 'admin-catalog',
        });
    },

    // POST /admin/catalog/category/create
    createCetegory(req, res) {
        let createCategory = Object.assign({}, req.body, {
            image: req.file ? req.file.filename : ''
        });
        Category.create(createCategory)
            .then( () => res.redirect('/admin/catalog/'))
            .catch(err => console.error(err));
    },
    
    // GET /admin/catalog/category/props/:categoryId
    showAdminCategoryProps(req, res) {
        Category.findOne({ _id: req.params.categoryId })
            .then(category => {
                Unit.find()
                    .then(units => {
                        res.render('catalog/form-props', {
                            id: 'admin-catalog',
                            category,
                            units: units.map(unit => unit.name)
                        });
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    },
    
    // POST /admin/catalog/category/props/:categoryId
    addCategoryProps(req, res) {
        const id = req.body._id;
        const name = req.body.propsName;
        const unit = req.body.propsUnit;
        const props = [];

        for (let index = 0; index < name.length; index++) {
            let obj ={};
            obj._id = id[index];
            obj.propsName = name[index];
            obj.propsUnit = unit[index];
            props.push(obj);
        }
        const data = Object.assign({}, {props});

        Category.findOneAndUpdate({_id: req.currentCategory._id}, data)
            .then(() => res.redirect('/admin/catalog/'))
            .catch(err => console.error(err));
    },

    // POST /admin/catalog/units/create
    createUnits(req, res) {
        Unit.create(req.body)
            .then(() => {
                res.redirect('/admin/catalog/');
            })
            .catch(err => console.error(err));
    },

    // POST /admin/catalog/units/delete
    deleteUnit(req, res) {
        Unit.remove({_id: req.body})
            .then(() => res.redirect('/admin/catalog/'))
            .catch(err => console.error(err));
    },
    
    // GET /admin/catalog/units/get  
    getUnit(req, res) {
        Unit.find()
            .then(units => res.status(200).json(units))
            .catch(err => console.error(err));
    },

    
    // GET /admin/catalog/product/create
    showAdminProductCreatePage(req, res) {
        Category.find()
            .then(categories => {
                res.render('catalog/form', {
                    id: 'admin-catalog',
                    categories,
                    product: new Product()
                });
            })
            .catch(console.error);
    },

    // POST /admin/catalog/product/create
    createProduct(req, res) {
        let units = req.body.propUnit;
        let names = req.body.propName || [];
        let values = req.body.value;
        let props = [];

        for (let i = 0; i < names.length; i++) {
            let obj = {};
            obj.unit = units[i];
            obj.name = names[i];
            obj.value = values[i];
            props.push(obj);
        }

        let { actionPrice, actionTop } = req.body;
        let action = {actionPrice, actionTop};

        let data = Object.assign({}, req.body, { props }, { action }, {image: req.file ? req.file.filename : ''} );

        Product.create(data)
            .then(() => {
                res.redirect('/admin/catalog/');
            })
            .catch(console.error);
    },

    // GET /admin/catalog/product/:productId/edit
    showProductEditPage(req, res) {
        Promise.all([Category.find(), Product.findOne({_id: req.params.productId})])
            .then(response => {
                let [categories, product] = response;

                res.render('catalog/form', {
                    id: 'admin-catalog',
                    categories,
                    product
                });
            })
            .catch(console.error);
    },

    // POST /admin/catalog/product/:productId/edit
    updateProduct(req, res) {
        let units = req.body.propUnit;
        let names = req.body.propName || [];
        let values = req.body.value;
        let props = [];

        for (let i = 0; i < names.length; i++) {
            let obj = {};
            obj.unit = units[i];
            obj.name = names[i];
            obj.value = values[i];
            props.push(obj);
        }

        let { actionPrice, actionTop } = req.body;
        let action = {actionPrice, actionTop};

        let data = Object.assign({}, req.body, { props }, { action }, {image: req.file ? req.file.filename : req.currentProduct.image} );

        Product.findOneAndUpdate({_id: req.params.productId}, data)
            .then(() => {
                res.redirect('/admin/catalog');
            })
            .catch(err => {
                if (err.code === 11000) {
                    let {message} = err;
                    let val = /(\b\d+\b|\B".+")|(\w+_1)/g;
                    let [model, value] = message.match(val);
                    model.replace('_1', '');
                    console.log(err);
                    req.flash('duplicate_msg', `Значение ${value} в поле ${model} уже существует! Значение должно быть уникальным!`);
                    res.redirect('/admin/catalog');
                }
            });
    },

    // GET /admin/catalog/product/:productId/edit
    showProductDeletePage(req, res) {
        res.render('catalog/delete', {
            id: 'admin-delete-product',
        });

    },
    // POST /admin/catalog/product/:productId/edit
    deleteProduct(req, res) {
        if (req.body.confirm) {
            req.currentProduct.remove()
                .then(() => res.redirect('/admin/catalog/'))
                .catch(console.error);
        } else {
            res.redirect('/admin/catalog/');
        }
    }

};