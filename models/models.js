import { DataTypes } from "sequelize";
import sequelize from "../db.js";

export const models = {
  Products: sequelize.define(
    "Products",
    {
      IdProduct: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "Productos",
    }
  ),
};
