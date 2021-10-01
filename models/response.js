const mongoose = require('mongoose')

const recordsResponse = new mongoose.Schema({
    _id: 0,
    code: {
        type: Number,
    },
    msg: {
        type: String,
    },
    records: [
        {
            key: String,
            createdAt: Date,
            totalCount: Number,
            _id: 0,
        },
    ],
})

module.exports = mongoose.model('recordsResponse', recordsResponse)
