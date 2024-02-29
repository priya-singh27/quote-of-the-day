const cron = require('node-cron');
const express = require('express');
const app = express();
const  sendEmailsToActiveUsers  = require('./task/sendEmail');
const { connectToDb, addQuotesToDb } = require('./utils/db');
const quotesData = require('./readQuotes');

// Schedule a task to run every day at 10 AM
cron.schedule('*/5 * * * * *', async() => {//'0 10 * * *'
    try {
        await sendEmailsToActiveUsers();
    } catch (err) { 
        console.log('Error sending quotes:',err);
    }
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