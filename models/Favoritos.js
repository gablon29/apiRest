import { DataTypes } from "sequelize";
import sequelize from "../db.js";

export default sequelize.define(
  "Favoritos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "Id",
      },
    },
    ProductId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Productos",
        key: "IdProduct",
      },
    },
  },
  {
    timestamps: false,
  }
);
