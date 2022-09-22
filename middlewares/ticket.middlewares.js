const { STATUS } = require('../utils/constants');
const { successResponseBody, errorResponseBody} = require('../utils/responsebody');
const verifyTicketNotificationCreateRequest = async (req, res, next) =>{
    if(!req.body.subject) {
        errorResponseBody.err = 'No subject given for the email';
        return res.status(STATUS.BAD_REQUEST).json(errorResponseBody);
    }
    if(!req.body.content) {
        errorResponseBody.err = 'No content given for the email'
        return res.status(STATUS.BAD_REQUEST).json(errorResponseBody);
    }
    if(!req.body.recepientEmails || !(req.body.recepientEmails instanceof Array) || 
        req.body.recepientEmails.length <= 0
    ) {
        errorResponseBody.err - 'No recepitent emails given';
        return res.status(STATUS.BAD_REQUEST).json(errorResponseBody);
    }
    next();
}

module.exports = {
    verifyTicketNotificationCreateRequest
}