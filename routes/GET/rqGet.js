import { Router } from "express";
import { initRegisterHandler } from "../../handlers/initRegister.js";
import { adminGet } from "../../controllers/adminGet.js";
import { getUsersControllers } from "../../controllers/getUsers.js";
import { createUserControllers } from "../../controllers/createUser.js";
import { updateUserControllers } from "../../controllers/updateUser.js";
import { deleteUsersControllers } from "../../controllers/deleteUser.js";

const routerGet = Router();

// funcion comodin para testear cualquier logica
routerGet.get("/user", (req, res) => {
  const { id } = req.params;
  res.send("hola mundo");
});
// funcion para obtener todos los usuarios
routerGet.get("/getUsers", getUsersControllers);

routerGet.route("/allProducts").get((req, res) => {
  res.status(200).send("hoal");
});

routerGet
  .route("/apiUser/:id")
  .get(getUsersControllers)
  .post(createUserControllers)
  .patch(updateUserControllers)
  .delete(deleteUsersControllers);

routerGet.route("/init").get(initRegisterHandler);

routerGet.route("/allAdmins").get(adminGet);

export default routerGet;
