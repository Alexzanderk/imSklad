const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const productProps = new Schema({
    unit: { type: String},
    name: { type: String},
    value: {type: String}
});

const Product = new Schema({
    name: { type: String, trim: true},
    model: {type: String, unique: true, trim: true, uppercase: true},
    article: {type: Number, unique: true},
    brand: {type: String},
    price: {type: Number},
    priceUSD: {type: Number},
    action: {
        actionPrice: {type: Number},
        actionTop: {type: String, enum: ['top', 'b-quality', 'b-price', 'no']}
    },
    props: [productProps],
    image: { type: String },
    category: {type: String, trim: true, lowercase: true},
    description: { type: String},
    advantage: { type: String},
    published: { type: Boolean, default: false },
    date: { type: Date, default: Date.now, get: value => moment(value) },
    alias: { type: String, unique: true, trim: true, lowercase: true }
}, {
    toObject: { getters: true, virtuals: true },
    toJSON: { versionKey: false, getters: true },
    timestamps: true
});

Product.virtual('img').get(function() {
    return `/upload/${this.image}`;
});

Product.pre('save', function(next) {
    this.alias = `${this.category}-${this.model}`;
    next();
});



module.exports = mongoose.model('Product', Product);