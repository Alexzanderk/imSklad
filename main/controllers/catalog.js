const newsList = require('../data/news.json');
const categories = require('../data/category.json');

const vulkan = require('../data/vulkan.json');
let products = [];
vulkan.forEach(el => {
    if (el.category === 'palletTruck') {products.push(el)} 
});

console.log(products);

module.exports = {

    //GET /catalog
    showCatalog(req,res) {
        res.render('catalog', {
            id: 'catalog',
            newsList,
            categories
        });
    },

    //GET /:category
    showCategoryProducts(req, res) {
        res.render('category-products', {
            id: 'catalog',
            category: req.params.categoryId,
            newsList,
            categories
        });
    },

    //GET /:product
    showProduct(req, res) {
        res.render('product', {
            id: 'product',
            products,
            newsList,
            categories
        });
    }
}