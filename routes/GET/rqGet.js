import { Router } from "express";
import { initRegisterHandler } from "../../handlers/initRegister.js";
import { adminGet } from "../../controllers/adminGet.js";
import { get } from "https";
import { getAllUsersController } from "../../controllers/getAllUsersControllers.js";
import { getAllCities } from "../../controllers/cities/getAllCities.js";

const routerGet = Router();

// funcion comodin para testear cualquier logica
routerGet.get("/user", (req, res) => {
  const { id } = req.params;
  res.send("hola mundo");
});

routerGet.route("/allUsers").get(getAllUsersController);

routerGet.route("/allProducts").get(getAllCities);
routerGet.route("/init").get(initRegisterHandler);

routerGet.route("/allAdmins").get(adminGet);

export default routerGet;
