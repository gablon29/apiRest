import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Users = sequelize.define("Users", {
  ID: {
    type: DataTypes.STRING,
    primaryKey: true,
    field: "Id",
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Users;
