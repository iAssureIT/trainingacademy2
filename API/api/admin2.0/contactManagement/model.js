const mongoose = require('mongoose');

const Contact = mongoose.Schema({
    _id             : mongoose.Schema.Types.ObjectId,
    name            :String,
    firstName       :String,
    lastName        :String,
    phoneNumber     :Number,
    pincode         :Number,
    email           :String,
    message         :String,
    createdAt       : Date,
});

module.exports = mongoose.model('contacts',Contact);