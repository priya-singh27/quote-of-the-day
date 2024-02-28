const Quote = require('../models/Quotes');

async function getRandomQuote() {
    try {
        const count = await Quote.countDocuments();
        const randomIndex = Math.floor(Math.random() * count);
        const randomQuote = await Quote.findOne().skip(randomIndex);
        return randomQuote;
    } catch (err) {
        console.log('Error fetching random quote:', err);
        throw err;
    }
}
module.exports = getRandomQuote;