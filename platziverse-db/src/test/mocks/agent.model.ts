'use strict'

const { agentFixtures } = require('../fixtures')

const mockAgentModel = {
  hasMany: jest.fn(),
  findById: jest.fn(id => Promise.resolve(agentFixtures.byId(id))),
  findOne: jest.fn(filter => Promise.resolve(agentFixtures.byUuid(filter.where.uuid))),
  findAll: jest.fn(() => Promise.resolve(agentFixtures.all)),
  update: jest.fn(single => Promise.resolve(single)),
  create: jest.fn(single => Promise.resolve({ toJSON () { return single } }))
}


export default mockAgentModel;