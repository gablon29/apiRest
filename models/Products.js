import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const model = (sequelize) => {
  sequelize.define(
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
  );
};

export default model;
