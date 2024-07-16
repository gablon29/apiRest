import { Sequelize } from "sequelize";

const sequelize = new Sequelize("gabriel", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default sequelize;
