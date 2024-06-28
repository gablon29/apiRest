import { Router } from "express";
import { fetch_data } from "../../controllers/getData.js";
import { fetchAllData } from "../../controllers/fetchAllData.js";

const routerGet = Router();

// funcion comodin para testear cualquier logica
routerGet.get("/", (req, res) => {
  res.send("hola mundo");
});

routerGet.get("/fetch_data", fetch_data);

// traemos toda la informacion
routerGet.get("/alldata", fetchAllData);

export default routerGet;
