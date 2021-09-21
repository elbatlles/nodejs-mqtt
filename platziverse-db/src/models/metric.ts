"use strict";
/*
import { DataTypes } from "sequelize/types";

//const Sequalize = require("sequelize");

const setupDataBase = require("../lib/db");

module.exports = function setupMetricModel(config: any) {
  const sequelize = setupDataBase(config);
  return sequelize.define("metric", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
*/

import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../db";
import AgentModel from "./agent";

//const setupDataBase = require("../lib/db");
interface MetricAttributes {
  type: string;
  value: Text;
}
export interface MetricInput
  extends Optional<MetricAttributes, "type" | "value"> {}
export interface MetricOutput extends Required<MetricAttributes> {}
class MetricModel
  extends Model<MetricAttributes, MetricInput>
  implements MetricAttributes
{
  type: string;
  value: Text;
}

MetricModel.init(
  {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export default MetricModel;
