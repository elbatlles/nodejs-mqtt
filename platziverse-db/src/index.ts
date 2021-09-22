import sequelizeConnection from "./db";
import AgentModel from "./models/agent";
import MetricModel from "./models/metric";
require('dotenv').config();
import chalk = require("chalk");
import defaults from "defaults";

module.exports = async function (config:any) {
  const agent = AgentModel;
  const metric = MetricModel;

  const sequelize = sequelizeConnection
  MetricModel.belongsTo(AgentModel);
  AgentModel.hasMany(MetricModel);
  await sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 
  })
  .catch(err => {
    console.error(' Unable to connect to the database:', err);
    console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  
  });
 
 if(process.env.SETUP){
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
   
 }

  
  return {
    agent,
    metric,
  };
};
