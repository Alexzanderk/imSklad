const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const News = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    fullDescription: { type: String, required: true },
    published: {type: Boolean, default: false},
    dateNews: {type: Date, default: Date.now}
},
{
    toObject: { getters: false, virtuals: false },
    toJSON: { versionKey: false, getters: false },
    timestamps: true
})

module.exports = mongoose.model('News', News);