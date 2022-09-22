const notificationService = require('../services/notification.service');
const { successResponseBody, errorResponseBody} = require('../utils/responsebody');
const { STATUS } = require('../utils/constants');

const createTicket = async (req, res) => {
    try {
        const response = await notificationService.create(req.body);
        successResponseBody.data = response;
        successResponseBody.message = 'Successfully created a notification ticket';
        return res.status(STATUS.CREATED).json(successResponseBody);
    } catch (error) {
        if(error.err) {
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
    }
}

const getAllTickets = async (req, res) => {
    try {
        const response = await notificationService.getAll();
        successResponseBody.data = response;
        successResponseBody.message = 'Successfully fetched all the tickets';
        return res.status(STATUS.OK).json(successResponseBody);
    } catch (error) {
        errorResponseBody.err = error.err;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
    }
}

const getTicket = async (req, res) => {
    try {
        const response = await notificationService.getById(req.params.id);
        successResponseBody.data = response;
        successResponseBody.message = 'Successfully fetched details of the given ticket id';
        return res.status(STATUS.OK).json(successResponseBody);

    } catch (error) {
        if(error.err) {
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
    }
}

module.exports = {
    createTicket,
    getAllTickets,
    getTicket
}