import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Cities = sequelize.define(
  "Cities",
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "Cities",
  }
);
export default Cities;