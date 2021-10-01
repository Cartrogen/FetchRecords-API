class UnexpectedError extends Error {
    constructor(message, status) {
        super()
        this.errorType = this.constructor.name
        this.status = status
        this.message = message
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = UnexpectedError
