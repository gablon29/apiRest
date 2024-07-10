import { Sequelize } from "sequelize";
import productModel from "./models/Products.js";

const sequelize = new Sequelize("gabriel", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

productModel(sequelize);

export const { Products } = sequelize.models;

export default sequelize;
