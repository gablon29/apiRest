import { Router } from "express";
import { initRegisterHandler } from "../../handlers/initRegister.js";
import { adminGet } from "../../controllers/adminGet.js";
import { getUsersControllers } from "../../controllers/getUsers.js";
import { createUserControllers } from "../../controllers/createUser.js";
import { updateUserControllers } from "../../controllers/updateUser.js";
import { deleteUsersControllers } from "../../controllers/deleteUser.js";
import { getProducts } from "../../controllers/products/getProduct.js";
import { createProduct } from "../../controllers/products/createProduct.js";
import { updateProduct } from "../../controllers/products/updateProduct.js";

const routerGet = Router();

// funcion comodin para testear cualquier logica
routerGet.get("/allUsers", (req, res) => {
  res.send({ msj: "hola" });
});
// funcion para obtener todos los usuarios
routerGet.get("/getUsers", getUsersControllers);

routerGet.route("/allProducts").get((req, res) => {
  const { field, value } = req.query;
  console.log(field, value);
  res.status(200).send("hoal");
});

routerGet
  .route("/product")
  .get(getProducts)
  .post(createProduct)
  .patch(updateProduct);

routerGet
  .route("/apiUser/:id")
  .get(getUsersControllers)
  .post(createUserControllers)
  .patch(updateUserControllers)
  .delete(deleteUsersControllers);

routerGet.route("/init").get(initRegisterHandler);

routerGet.route("/allAdmins").get(adminGet);

export default routerGet;
