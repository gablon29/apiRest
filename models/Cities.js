import { DataTypes } from "sequelize";
import sequelize from "../db.js";

export default sequelize.define(
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
    country: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
    tableName: "Cities",
  }
);
