import sequelizeConnection from "./db";
import AgentModel from "./models/agent";
import MetricModel from "./models/metric";
require('dotenv').config();
import chalk = require("chalk");
import inquirer = require("inquirer");

module.exports = async function (config:any) {
  const agent = AgentModel;
  const metric = MetricModel;

  MetricModel.belongsTo(AgentModel);
  AgentModel.hasMany(MetricModel);
  await sequelizeConnection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 
  })
  .catch(err => {
    console.error(' Unable to connect to the database:', err);
    console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  
  });
 
 if(process.env.SETUP){
    await sequelizeConnection.sync({ force: true });
    console.log("All models were synchronized successfully.");
    process.exit(0)
 }

  
  return {
    agent,
    metric,
  };
};
