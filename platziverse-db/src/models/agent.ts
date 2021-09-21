"use strict";
/*
import { DataTypes } from "sequelize/types";

//const Sequalize = require("sequelize");

const setupDataBase = require("../lib/db");

module.exports = function setupAgentModel(config: any) {
  const sequelize = setupDataBase(config);
  return sequelize.define("agent", {
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    connected: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
};
*/
import sequelizeConnection from "../db";
import { DataTypes, Model, Optional } from "sequelize";
import MetricModel from "./metric";


//const setupDataBase = require("../lib/db");
interface AgentAttributes {
  uuid: string;

  name: string;
  username: string;
  hostname: string;
  pid: number;
  connected: boolean;
}
export interface AgentInput
  extends Optional<
    AgentAttributes,
    "uuid" | "name" | "username" | "hostname" | "hostname" | "pid" | "connected"
  > {}
export interface AgentOutput extends Required<AgentModel> {}

class AgentModel
  extends Model<AgentAttributes, AgentOutput>
  implements AgentAttributes
{
  uuid: string;
  name: string;
  username: string;
  hostname: string;
  pid: number;
  connected: boolean;
  type: string;
  /* connected: boolean;
  uuid: string;
  name: string;
  username: string;
  hostname: string;
  pid: number;
connected: boolean;
  type: string;
  value: Text;*/
}

AgentModel.init(
  {
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    connected: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

//AgentModel.hasOne(MetricModel);

export default AgentModel;
