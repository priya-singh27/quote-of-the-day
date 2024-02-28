const cron = require('node-cron');
const express = require('express');
const app = express();
const { connectToDb, addQuotesToDb } = require('./utils/db');
const quotesData = require('./readQuotes');

// Schedule a task to run every day at 10 AM
cron.schedule('0 10 * * *', () => {
    sendDailyQuotes(); 
});



require('./utils/routes')(app);
require('./utils/config')();

try {
    connectToDb();
    addQuotesToDb(quotesData);
} catch (err) {
    console.log('An error occurred:',err);
}



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));