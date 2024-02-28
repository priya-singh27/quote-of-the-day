const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    Quote: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required:true
    }
});

const Quote= mongoose.model('Quote', quoteSchema);

module.exports = Quote;
  