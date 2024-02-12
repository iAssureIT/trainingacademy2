const mongoose = require('mongoose');

const seoDetailsSchema = mongoose.Schema({
	_id			    : mongoose.Schema.Types.ObjectId,
    url             : String,
    metaTagTitle    : String,
    metaDescription : String,
    keywords        : String,
    canonicalUrl    : String,
    createdAt       : { type: Date, default: Date.now() },
    createdBy       : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
});

module.exports = mongoose.model('seodetails',seoDetailsSchema);
