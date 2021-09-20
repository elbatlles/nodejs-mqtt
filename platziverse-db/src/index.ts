"use strict";
import sequelizeConnection from "./db";
import AgentModel from "./models/agent";
import MetricModel from "./models/metric";

module.exports = async function (config:any) {
  const agent = AgentModel;
  const metric = MetricModel;
  await sequelizeConnection.authenticate()
  return {
    agent,
    metric,
  };
};
