import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Products =  sequelize.define(
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
export default Products;