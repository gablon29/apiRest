import { Sequelize } from "sequelize";
import Users from "./models/Users";

const sequelize = new Sequelize(
  "postgres://postgres:dasf@localhost:5432/Demo",
  {
    logging: false,
  }
);

export const { Users } = sequelize.models;

export default sequelize;
