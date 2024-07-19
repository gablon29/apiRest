import { Users, Cities, Producst, Favoritos } from "./index.js";

Users.hasMany(Favoritos, { foreignKey: "userId" });
Favoritos.belongsTo(Users, { foreignKey: "userId" });
Producst.hasMany(Favoritos, { foreignKey: "ProductId" });
Favoritos.belongsTo(Producst, { foreignKey: "ProductId" });
Users.hasMany(Cities, { foreignKey: "cityId" });
Cities.hasMany(Users, { foreignKey: "cityId" });
