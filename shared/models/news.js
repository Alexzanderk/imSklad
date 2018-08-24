const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const News = new Schema({
    title: { type: String, required: true },
    image: { type: String },
    description: { type: String},
    fullDescription: { type: String},
    published: { type: Boolean, default: false },
    dateNews: { type: Date, default: Date.now }
}, {
    toObject: { getters: true, virtuals: true },
    toJSON: { versionKey: false, getters: true },
    timestamps: true
});

News.virtual('img').get(function() {
    return `/upload/${this.image}`;
});


module.exports = mongoose.model('News', News);