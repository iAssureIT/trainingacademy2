const mongoose = require('mongoose');

const TestRide = mongoose.Schema({
    _id             : mongoose.Schema.Types.ObjectId,
    fullName        : String,
    mobile          : Number,
    city            : String,
    createdAt       : Date,
    createdBy       : { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
});

module.exports = mongoose.model('testride',TestRide);