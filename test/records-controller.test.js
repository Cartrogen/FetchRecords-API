const recordsController = require('../controller/records-controller')

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
