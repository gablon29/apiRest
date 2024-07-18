import { Router } from "express";
import { initRegisterHandler } from "../../handlers/initRegister.js";
import { adminGet } from "../../controllers/adminGet.js";

const routerGet = Router();

// funcion comodin para testear cualquier logica
routerGet.get("/user", (req, res) => {
  const { id } = req.params;
  res.send("hola mundo");
});

routerGet.route("/allUsers").get((req, res) => {
  res.json({ msj: "hola" });
});

routerGet.route("/allProducts").get((req, res) => {
  res.status(200).send("hoal");
});
routerGet.route("/init").get(initRegisterHandler);

routerGet.route("/allAdmins").get(adminGet);

export default routerGet;
