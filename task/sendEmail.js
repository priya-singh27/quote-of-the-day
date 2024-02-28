const config = require('config');
const nodemailer = require('nodemailer');
const User = require('../models/users');

async function sendEmailsToActiveUsers() {
    try {
        const activeUsers = await User.find({ isLoggedIn: true }); // Retrieve active users

        for (const user of activeUsers) {
            await sendEmail(user._id,'subject','body');
        }

        console.log('Emails sent to active users successfully.');
    } catch (err) {
        console.error('Error sending emails to active users:',err);
    }
}

async function sendEmail(userId, subject, text) {

    try {
        //Load User
        const user = await User.findById(userId);
        if (!user) {
            console.log('User not find');
            return;
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'priyasingh86906@gmail.com',
                pass: config.get('email.password')
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