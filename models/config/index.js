import sequelize from "../../db.js";
import ProductsModel from "../Products.js";
import FavoritosModel from "../Favoritos.js";
import UsersModel from "../Users.js";
import AdminModel from "../Admin.js";
import CitiesModel from "../Cities.js";
import TaskModel from "../Task.js";



export const {
    Products, Users, Favoritos, Admin, Cities, Task } = sequelize.models;
