import { Users, Cities, Products, Favoritos, Task } from "./index.js";

Users.hasMany(Products, { foreignKey: "userId", as: "products" });
Products.belongsToMany(Users, { through: Favoritos, foreignKey: "productId" });
Users.belongsTo(Cities, { foreignKey: "cityId", as: "city" });
Cities.hasMany(Users, { foreignKey: "cityId", as: "users" });

export default {
  Cities,
  Users,
  Products,
  Favoritos,
  Task,
};
