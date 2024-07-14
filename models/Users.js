import { DataTypes } from "sequelize";
import sequelize from "../db.js";

export default sequelize.define(
  "Users",
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    disponible: {
      type: DataTypes.TIME,
    },
  },
  {
    timestamps: false,
    tableName: "Users",
  }
);
