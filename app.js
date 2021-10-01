const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const InvalidInputDataError = require('./error-handling/invalid-input-data')
const responseCodes = require('./helper/response-codes')
const recordsRouter = require('./routes/records-routes')

app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use('/records', recordsRouter)

app.use((err, req, res, next) => {
    // This check makes sure this is a JSON parsing issue, but it might be coming from any middleware, not just body-parser:
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error(err)
        const error = new InvalidInputDataError(
            'Request data structure may be invalid. Please check your input data and try again',
            responseCodes.INVALID_INPUT_DATA
        )
        res.status(error.status).send(error)
    }
    next()
})

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('open', () =>
    console.log('DB connection successful, no errors encountered')
)
db.on('error', (error) => console.error(error))

app.listen(3000, () => {
    console.log('Server started on port 3000...')
})
