import { Router } from "express";
import { fetch_data } from "../../controllers/getData.js";
import { fetchAllData } from "../../controllers/fetchAllData.js";
import { getAllUser } from "../../controllers/getUserAll.js";

const routerGet = Router();

// funcion comodin para testear cualquier logica
routerGet.get("/", (req, res) => {
  res.send("hola mundo");
});

routerGet.get("/fetch_data", (req, res) => {
  const { nombre } = req.body;
  res.json({ message: nombre });
});

// traemos toda la informacion
routerGet.get("/alldata", fetchAllData);

routerGet.get("/users", getAllUser);
export default routerGet;
