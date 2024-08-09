import { Users, Cities, Products, Favoritos, Task } from "./index.js";

Users.hasMany(Products, { foreignKey: "userId", as: "products" });
Products.belongsToMany(Users, { through: Favoritos, foreignKey: "productId" });
Users.belongsTo(Cities, { foreignKey: "cityId", as: "city" });
Cities.hasMany(Users, { foreignKey: "cityId", as: "users" });
Users.belongsToMany(Task, { through: "UserTask", foreignKey: "name" }); // UserTask es la tabla intermedia
// Task.hasMany(Users, { through: "UserTask" }); // UserTask es la tabla intermedia

export default {
  Cities,
  Users,
  Products,
  Favoritos,
  Task,
};
