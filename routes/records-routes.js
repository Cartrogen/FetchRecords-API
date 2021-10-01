const response = require('express')
const express = require('express')
const router = express.Router()
const recordsController = require('../controller/records-controller')

// Fetch records
router.post('/fetchRecords', async (req, res) => {
    let response = await recordsController.fetchRecords(req)
    res.status(response.status).send(response)
})

module.exports = router
