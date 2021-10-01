const mongoose = require('mongoose')

const recordsRequest = new mongoose.Schema({
    key: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    counts: {
        type: [Number],
        required: true,
    },
    value: {
        type: String,
        required: false,
    },
})

module.exports = mongoose.model('records', recordsRequest)
