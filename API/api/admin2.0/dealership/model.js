const mongoose = require('mongoose');

const Dealership = mongoose.Schema({
    _id             : mongoose.Schema.Types.ObjectId,
    fullName        : String,
    mobile          : Number,
    email           : String,
    city            : String,
    createdAt       : Date,
    createdBy       : { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
});

module.exports = mongoose.model('dealership',Dealership);