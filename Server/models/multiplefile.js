const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mulitipleFileSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    address :{
        type: String,
        required: true
    },
    pincode :  {
        type: String,
        required: true
    },
    contact : {
        type: String,
        required: true
    },
    dimension :  {
        type: String,
        required: true
    },
    price :  {
        type: String,
        required: true
    },
    room :  {
        type: String,
        required: true
    },
    files: [Object],
    URL :  {
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('MultipleFile', mulitipleFileSchema);