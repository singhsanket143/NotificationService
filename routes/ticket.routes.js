const notificationController = require('../controllers/ticket.controller');
const ticketMiddlewares = require('../middlewares/ticket.middlewares');

const routes = (app) => {
    app.post(
        '/notiservice/api/v1/notifications',
        ticketMiddlewares.verifyTicketNotificationCreateRequest,
        notificationController.createTicket
    );
}

module.exports = routes;