import { Router } from "express";
import { initRegisterHandler } from "../../handlers/initRegister.js";
import { adminGet } from "../../controllers/adminGet.js";
import { getUsersControllers } from "../../controllers/getUsers.js";

const routerGet = Router();

// funcion comodin para testear cualquier logica
routerGet.get("/user", (req, res) => {
  const { id } = req.params;
  res.send("hola mundo");
});

routerGet.get("/getUsers", getUsersControllers);

routerGet.route("/allProducts").get((req, res) => {
  res.status(200).send("hoal");
});
routerGet.route("/init").get(initRegisterHandler);

routerGet.route("/allAdmins").get(adminGet);

export default routerGet;
