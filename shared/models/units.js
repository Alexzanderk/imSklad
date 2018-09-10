const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Units = new Schema({
    _id: {type: String, required: true, trim: true},
    name: {type: String, trim: true, required: true}
},{
    toObject: { getters: true, virtuals: true },
    toJSON: { versionKey: false, getters: false }
});


module.exports = mongoose.model('Units', Units);