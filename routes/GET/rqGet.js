import { Router } from "express";
import { initRegisterHandler } from "../../handlers/initRegister.js";
import { adminGet } from "../../controllers/adminGet.js";
import { getUsersControllers } from "../../controllers/getUsers.js";
import getCitiesById from "../../controllers/cities/getCitiesById.js";

const routerGet = Router();

// funcion comodin para testear cualquier logica
routerGet.get("/allUsers", (req, res) => {
  res.send({ msj: "hola" });
});

routerGet.get("/getUsers", getUsersControllers);

routerGet.route("/allProducts").get((req, res) => {
  res.send("allProducts");
});
routerGet.route("/init").get(initRegisterHandler);

routerGet.route("/allAdmins").get(adminGet);

routerGet.route("/cities/:id").get(getCitiesById);

export default routerGet;
