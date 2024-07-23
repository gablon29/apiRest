import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Users = sequelize.define(
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
    cityId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Cities",
        key: "Id",
      },
    },
    cityId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Cities",
        key: "Id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "Users",
  }
);

export default Users;