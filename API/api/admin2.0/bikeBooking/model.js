const mongoose = require('mongoose');

const Bikebooking = mongoose.Schema({
    _id             : mongoose.Schema.Types.ObjectId,
    fullName        : String,
    mobile          : Number,
    email           : String,
    city            : String,
    state           : String,
    vehicle         : String,
    color           : String,
    createdAt       : Date,
    createdBy       : { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
});

module.exports = mongoose.model('bikebooking',Bikebooking);