import { Sequelize } from "sequelize";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const basename = path.basename(__filename);
const __dirname = path.dirname(__filename);
const modelDefiners = [];

// conexion DB
export const sequelize = new Sequelize(
  `postgres://postgres:gabriel@localhost:5432/Demo`,
  {
    logging: false,
    native: false,
  }
);

// leemos todos los archivos de la carpeta models
// los requerimos y los guardamos en modelDefiners

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(import(path.join(__dirname, "/models", file)));
  });

const loadModels = async () => {
  const models = await Promise.all(modelDefiners);
  models.forEach((model) => model(sequelize));
};

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);
