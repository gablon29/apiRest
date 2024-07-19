import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
  logging: console.log,
});

export default sequelize;
