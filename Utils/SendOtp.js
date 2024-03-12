require('dotenv').config()
const nodemailer = require('nodemailer');


const SendOtp =async (userEmail, otp) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            auth: {
                user: process.env.SMTP_GMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.SMTP_GMAIL,
            to: userEmail,
            subject: 'Subject of the email',
            text: 'Your otp is ' + otp
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                reject(error);
            } else {
                console.log('Email sent:', info.response);
                resolve(true);
            }
        });
    });
}

module.exports = SendOtp