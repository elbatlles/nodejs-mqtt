

//const { mockAgentModel, mockMetricModel } = require('../test/mocks')
import  mockAgentModel from "../mocks/agent.model";
import mockMetricModel from "../mocks/metric.model";
const setupDatabase = require('../../index')

const config = {
    logging: () => {}
  }
  let db = null
describe('Agent Model', () => {
    beforeEach(async () => {
      jest.clearAllMocks()
  
      db = await setupDatabase()
    })

test('should be defined', () => {
    expect(db.agent).toBeTruthy()
  })
/*
  describe('Setup success run', () => {
    test('hasMany function of AgentModel should be executed once', () => {
      expect(mockAgentModel.hasMany).toBeCalledTimes(1)
    })

    test('Argument for hasMany function should be MetricModel', () => {
      expect(mockAgentModel.hasMany).toBeCalledTimes(1)
    })

    test('belongTo function of MetricModel should be executed once', () => {
      expect(mockMetricModel.belongsTo).toBeCalledTimes(1)
    })

    test('Argument for belongsTo function should be AgentModel', () => {
      expect(mockMetricModel.belongsTo).toBeCalledWith(mockAgentModel)
    })
  })*/
})