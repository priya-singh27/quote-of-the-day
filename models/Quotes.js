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

//a function to insert the quotes into your MongoDB database
async function addQuotesToDatabase(allQuotes) {
    try {
        await Quote.insertMany(allQuotes);
        console.log('Quotes inserted successfully');
    } catch (err) {
        console.log('Error inserting quotes',err);
    } finally {
        // Disconnect from MongoDB after insertion
        mongoose.disconnect();
    }
}



module.exports = Quote;
module.exports = addQuotesToDatabase;