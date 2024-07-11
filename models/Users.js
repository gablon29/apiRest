import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const models = sequelize.define(
  "Users",
  {
    ID: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: "Id",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  "Product",
  {
    ID: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }
);

export default models;
