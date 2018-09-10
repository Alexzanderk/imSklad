const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contacts = new Schema({
    adress: String,
    tel: [{ type: Number, trim: true }],
    email: [{ type: String, trim: true}]

});

const Company = new Schema({
    name: { type: String, trim: true},
    about: { type: String},
    delivery: {type: String},
    contacts
}, {
    toObject: { getters: true, virtuals: true },
    toJSON: { versionKey: false, getters: true },
    timestamps: true
});

module.exports = mongoose.model('Company', Company);