const records = require('../models/request')
const recordsResponse = require('../models/response')
const helper = require('../helper/helper-functions')
const InvalidInputData = require('../error-handling/invalid-input-data')
const responseCodes = require('../helper/response-codes')
const UnexpectedError = require('../error-handling/catch-all')

async function fetchRecords(req) {
    try {
        helper.validateInputData(req)

        let tempResult = await records.aggregate([
            {
                $project: {
                    _id: 0,
                    key: '$key',
                    createdAt: '$createdAt',
                    totalCount: {
                        $sum: { $sum: '$counts' },
                    },
                },
            },
            {
                $match: {
                    createdAt: {
                        $gt: new Date(req.body.startDate),
                        $lt: new Date(req.body.endDate),
                    },
                    totalCount: {
                        $gt: req.body.minCount,
                        $lt: req.body.maxCount,
                    },
                },
            },
        ])
        if (tempResult) {

            console.log("Records successfully retrieved from database")
            result = new recordsResponse()
            result.status = responseCodes.SUCCESS
            result.code = 0
            result.msg = 'Success'
            result.records = tempResult
            
            return result
        }

    } catch (error) {
        if (error instanceof InvalidInputData) {
            console.log(error)
            return error
        } else {
            console.log(error)
            return new UnexpectedError(
                'Sorry, unexpected error occured. Please try again in a few minutes',
                responseCodes.CATCH_ALL_ERROR
            )
        }
    }
}

module.exports = {
    fetchRecords,
}
