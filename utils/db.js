const mongoose = require('mongoose');
const quote = require('../models/Quotes');

async function connectToDb() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/quotes_DB');
        console.log('Connected to mongoDB');

    }
    catch (err) {
        console.log('Failed to connect to MongoDB:', err);
        throw err;
    }
}

//a function to insert the quotes into your MongoDB database
async function addQuotesToDb(allQuotes) {
    try {
        for (const { Quote, Author } of allQuotes) {
            await quote.create({ quote: Quote, author: Author });
        }
        console.log('Quotes inserted successfully');
    } catch (err) {
        console.log('Error inserting quotes',err);
    } //finally {
    //     // Disconnect from MongoDB after insertion
    //     mongoose.disconnect();
    // }
}

module.exports = {
    connectToDb,
    addQuotesToDb
}