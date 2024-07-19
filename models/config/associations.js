import { Users, Cities, Products, Favoritos } from "./index.js";



Users.belongsTo(Cities, { foreignKey: "cityId", as: "city" });
Cities.hasMany(Users, { foreignKey: "cityId", as: "users" });

export default {
  Cities,
  Users,
  Products,
  Favoritos,
};
