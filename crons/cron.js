const cron = require('node-cron');
const Ticket = require('../models/ticketNotification');
const sendMail = require('../services/email.service');

cron.schedule('*/2 * * * *', async () => {
    const notificationsToBeSent = await Ticket.find({
        status: 'PENDING'
    });

    notificationsToBeSent.forEach(notififcation => {
        const mailData = {
            from: 'mba@support.com',
            to: notififcation.recepientEmails,
            subject: notififcation.subject,
            text: notification.content
        };
        sendMail(process.env.EMAIL, process.env.EMAIL_PASS, mailData);
    });
});
