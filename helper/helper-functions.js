const InvalidInputDataError = require('../error-handling/invalid-input-data')
const responseCodes = require('../helper/response-codes')

// This function validates the data in the request object sent by user
function validateInputData(req) {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/

    if (
        typeof req.body.startDate !== 'string' ||
        !req.body.startDate.match(dateFormat)
    ) {
        throw new InvalidInputDataError(
            'Invalid start date. Please try again',
            responseCodes.INVALID_INPUT_DATA
        )
    }
    if (
        typeof req.body.endDate !== 'string' ||
        !req.body.endDate.match(dateFormat)
    ) {
        throw new InvalidInputDataError(
            'Invalid end date. Please try again',
            responseCodes.INVALID_INPUT_DATA
        )
    }
    if (new Date(req.body.startDate) > new Date(req.body.endDate)) {
        throw new InvalidInputDataError(
            'Start date must be prior to end date. Please try again',
            responseCodes.INVALID_INPUT_DATA
        )
    }
    if (typeof req.body.minCount !== 'number') {
        throw new InvalidInputDataError(
            'Invalid mincount. Please try again',
            responseCodes.INVALID_INPUT_DATA
        )
    }
    if (typeof req.body.maxCount !== 'number') {
        throw new InvalidInputDataError(
            'Invalid maxcount. Please try again',
            responseCodes.INVALID_INPUT_DATA
        )
    }
    if (req.body.minCount > req.body.maxCount) {
        throw new InvalidInputDataError(
            'mincount must be less than maxcount. Please try again',
            responseCodes.INVALID_INPUT_DATA
        )
    }
}

module.exports = {
    validateInputData,
}
