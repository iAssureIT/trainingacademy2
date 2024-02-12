const mongoose = require('mongoose');

const PurposeOfTravelSchema = mongoose.Schema({
    _id                       : mongoose.Schema.Types.ObjectId,
    purposeType                  : String,
    createdBy                 : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    createdAt                 : Date,
    updateLog                 : [
                                {
                                    updatedAt           : Date,
                                    updatedBy           : { type: mongoose.Schema.Types.ObjectId, ref: 'users' } 
                                }
                                ]
});

module.exports = mongoose.model('purposeOftravelmaster',PurposeOfTravelSchema);