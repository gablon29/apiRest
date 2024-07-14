import { DataTypes } from "sequelize";
import sequelize from "../db.js";

export default sequelize.define(
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
    timestamps: false,
  }
);
