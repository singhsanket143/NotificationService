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

const getAll = async () => {
    try {
        const response = await Ticket.find();
        return response;
    } catch (error) {
        throw error;
    }
}

const getById = async (id) => {
    try {
        const response = await Ticket.findById(id);
        if(!response) {
            throw {
                err: 'No ticket details found',
                code: STATUS.NOT_FOUND
            };
        }
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    getAll,
    getById
}