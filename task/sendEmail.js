const getRandomQuote = require('../repository/getQuote');
const config = require('config');
const nodemailer = require('nodemailer');
const User = require('../models/users');

async function sendEmailsToActiveUsers() {
    try {
        const activeUsers = await User.find({ isLoggedIn: true }); // Retrieve active users
        const body = await getRandomQuote();

        for (const user of activeUsers) {
            await sendEmail(user._id,'Quote For Today',body);
        }

        console.log('Emails sent to active users successfully.');
    } catch (err) {
        console.error('Error sending emails to active users:',err);
    }
}

async function sendEmail(userId, subject, text) {

    try{
        //Load User
        const user = await User.findById(userId);
        if (!user) {
            console.log('User not find');
            return;
        }
        console.log(config.get('email.password'));

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'priyasingh86906@gmail.com',
                pass:config.get('email.password'),
            }
        });

        const mailOptions = {
            from: 'priyasingh86906@gmail.com',
            to: user.email,
            subject: subject,
            text: text
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (err) {
        console.log('Error sending email',err);
    }
    
}
module.exports = sendEmailsToActiveUsers ;
