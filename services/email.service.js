const nodemailer = require('nodemailer');

const sendMail = (userId, password) => {
    const transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: userId,
            pass: password
        }
    });
    transport.sendMail(
        {
            from: 'mba@support.com',
            to: 'moviebookingappservice@gmail.com',
            subject: 'Test another email',
            text: 'Hey, this is a test email'
        }
    )
}

module.exports = sendMail;