"use strict";
/*
import { Sequelize } from "sequelize";



let sequalize:any = null;
module.exports = function setupDataBase(config:any) {
  if (!sequalize) {
    sequalize = new Sequelize(config);
  }
  return Sequelize;
};
*/
require('dotenv').config()
var debug = require('debug')('platziverse:sequelizeConnection')
import { Dialect, Sequelize } from 'sequelize'

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD

const sequelizeConnection = new Sequelize(dbName, dbUser,dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  logging:s => debug(s),
  
})


export default sequelizeConnection

 
