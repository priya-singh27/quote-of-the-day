const fs = require('fs');

const quotesData = JSON.parse(fs.readFileSync('quotes.json', 'utf-8'));

// fs.readFile('quotes.json', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('Error reading quotes file:', err);
//         return;
//     }
//     try {
//         const quotes = JSON.parse(data);
//         console.log('Quotes read from file:',quotes);
//     } catch (error) {
//         console.log('Error parsing JSON:',error);
//     }
// });
module.exports= quotesData;