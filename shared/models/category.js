const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const propsTable = new Schema({
    _id: {type: String},
    propsName: {type: String},
    propsUnit: {type: String}
});

const Category = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    image: {type: String, required: true},
    props: [propsTable]
},{
    toObject: { getters: true, virtuals: true },
    toJSON: { versionKey: false, getters: true }
});

module.exports = mongoose.model('Category', Category);