const helper = require('../helper/helper-functions')

test('validate input data', () => {
    const testData = {
        body: {
            startDate: '2014-09-07',
            endDate: '2017-02-20',
            minCount: 1998,
            maxCount: 3000,
        },
    }
    expect(() => {
        helper.validateInputData(testData)
    }).not.toThrow()
})

test('incorrect input startDate', () => {
    const testData = {
        body: {
            startDate: '2014-09',
            endDate: '2017-02-20',
            minCount: 1998,
            maxCount: 3000,
        },
    }
    expect(() => {
        helper.validateInputData(testData)
    }).toThrow()
})

test('incorrect input endDate', () => {
    const testData = {
        body: {
            startDate: '2014-09-01',
            endDate: '2017----02-20',
            minCount: 1998,
            maxCount: 3000,
        },
    }
    expect(() => {
        helper.validateInputData(testData)
    }).toThrow()
})

test('incorrect input minCount', () => {
    const testData = {
        body: {
            startDate: '2014-09-01',
            endDate: '2017-02-20',
            minCount: '1998',
            maxCount: 3000,
        },
    }
    expect(() => {
        helper.validateInputData(testData)
    }).toThrow()
})

test('incorrect input maxCount', () => {
    const testData = {
        body: {
            startDate: '2014-09-01',
            endDate: '2017-02-20',
            minCount: 1998,
            maxCount: '3000',
        },
    }
    expect(() => {
        helper.validateInputData(testData)
    }).toThrow()
})

test('startDate greater than endDate', () => {
    const testData = {
        body: {
            startDate: '2019-09-01',
            endDate: '2017-02-20',
            minCount: 1998,
            maxCount: 3000,
        },
    }
    expect(() => {
        helper.validateInputData(testData)
    }).toThrow()
})

test('minCount greater than maxCount', () => {
    const testData = {
        body: {
            startDate: '2013-09-01',
            endDate: '2017-02-20',
            minCount: 3500,
            maxCount: 3000,
        },
    }
    expect(() => {
        helper.validateInputData(testData)
    }).toThrow()
})
