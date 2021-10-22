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
        type: Number,
        required: true
    },
    contact : {
        type: Number,
        required: true
    },
    dimension :  {
        type: Number,
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
    Is_sold:{
        type: Boolean,
        default:false
    },
    
}, {timestamps: true});

module.exports = mongoose.model('MultipleFile', mulitipleFileSchema);