import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Admin = sequelize.define(
  "Admin",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    username: {
      type: DataTypes.STRING(10),
      unique: true,
      allowNull: false,
      field: "user_name",
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "create_date",
    },
    password: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
export default Admin;
