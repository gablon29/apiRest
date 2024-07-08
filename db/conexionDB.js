import { Sequelize } from "sequelize";
import { fileURLToPath, pathToFileURL } from "url";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const basename = path.basename(__filename);
const __dirname = path.dirname(__filename);
const modelDefiners = [];

// conexion DB
export const sequelize = new Sequelize(
  `postgres://postgres:gabriel@localhost:5432/gabriel`,
  {
    logging: false,
    native: false,
  }
);

// leemos todos los archivos de la carpeta models
// los requerimos y los guardamos en modelDefiners

const modelsPath = path.join(__dirname, '../models');  // Ajuste para ubicar correctamente la carpeta models
const modelFiles = fs.readdirSync(modelsPath)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'));

for (const file of modelFiles) {
  const modelPath = path.join(modelsPath, file);
  console.log(`Checking file: ${modelPath}`);
  if (fs.lstatSync(modelPath).isFile()) {  // Verificamos si es un archivo
    console.log(`Importing model: ${modelPath}`);
    modelDefiners.push(import(pathToFileURL(modelPath).href)); // Usamos .href para obtener el string URL
  } else {
    console.log(`Skipping directory: ${modelPath}`);
  }
}



// * capitalizamos los nombres de los modelos ir: product => Product

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

  // En sequelize.models están todos los modelos importados como propiedades
  // Para relacionarlos hacemos un destructuring



export default {
    ...sequelize.models, // para importar los modelos
    conn: sequelize, // para importar la conexion
}
