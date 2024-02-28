const express = require('express');
const app = express();
const users = require('./routes/user');
const { connectToDb, addQuotesToDb } = require('./utils/db');
const quotesData = require('./readQuotes');
app.use(express.json());

app.use('/api/user', users);

try {
    connectToDb();
    addQuotesToDb(quotesData);
} catch (err) {
    console.log('An error occurred:',err);
}



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));