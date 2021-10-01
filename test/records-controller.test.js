const recordsController = require('../controller/records-controller')
const mongoose = require('mongoose')

beforeAll(async () => {
    const url = `mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true`
    await mongoose.connect(url, { useNewUrlParser: true })
})

afterAll(() => {
    mongoose.connection.close()
})

test('recordsController happy path result', async () => {
    const testData = {
        body: {
            startDate: '2014-09-01',
            endDate: '2017-02-20',
            minCount: 1998,
            maxCount: 3000,
        },
    }

    const result = await recordsController.fetchRecords(testData)
    expect(result).not.toBe(null)
})

test('recordsController happy path result status', async () => {
    const testData = {
        body: {
            startDate: '2014-09-01',
            endDate: '2017-02-20',
            minCount: 1998,
            maxCount: 3000,
        },
    }

    const result = await recordsController.fetchRecords(testData)
    expect(result.status).toBe(200)
})

test('recordsController unhappy path', async () => {
    const testData = {
        body: {
            startDate: '2014-09-0',
            endDate: '2017-02-20',
            minCount: 1998,
            maxCount: 3000,
        },
    }

    const result = await recordsController.fetchRecords(testData)
    expect(result.status).toBe(400)
})
