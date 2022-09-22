const Ticket = require('../models/ticketNotification');
const { STATUS } = require('../utils/constants');
const create = async (data) => {
    try {
        const ticket = await Ticket.create(data);
        return ticket;
    } catch (error) {
        if(error.name == 'ValidationError') {
            let err = {};
            Object.keys(error.errors).forEach(key => {
                err[key] = error.errors[key].message;
            });
            throw {
                err,
                code: STATUS.UNPROCESSABLE_ENTITY
            }
        }
        throw error;
    }
}

module.exports = {
    create
}