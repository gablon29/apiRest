import sequelize from "../db.js";
import "./Products.js";
import "./Users.js";
import "./Favoritos.js";
import "./Admin.js";

export const { Producst, Favoritos, Users, Admin } = sequelize.models;
