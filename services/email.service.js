const nodemailer = require('nodemailer');

const sendMail = (userId, password, mailData) => {
    const transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: userId,
            pass: password
        }
    });
    transport.sendMail(
        {
            from: mailData.from,
            to: mailData.to,
            subject: mailData.subject,
            text: mailData.text
        }
    );
}

module.exports = sendMail;