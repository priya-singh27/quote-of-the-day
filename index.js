const mongoose = require('mongoose');
const { addQuotesToDatabase } = require('./models/Quotes');
const { quotesData } = require('./readQuotes');

mongoose.connect('mongodb://0.0.0.0:27017/quotes',)
    .then(() => { 
        console.log('connected to mongoDB...');
        addQuotesToDatabase(quotesData);
    })
    .catch(err => console.log('Failed to connect to mongoDB..', err));