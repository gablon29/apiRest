import { Users, Favoritos, Producst } from "./index.js";

Users.hasMany(Favoritos, { foreignKey: "userId" });
Favoritos.belongsTo(Users, { foreignKey: "userId" });
Producst.hasMany(Favoritos, { foreignKey: "ProductId" });
Favoritos.belongsTo(Producst, { foreignKey: "ProductId" });

export default {
  Users,
  Producst,
  Favoritos,
};
