import { Router } from "express";
import { initRegisterHandler } from "../../handlers/initRegister.js";
import { getProducts } from "../../controllers/products/getProduct.js";
import { createProduct } from "../../controllers/products/createProduct.js";
import { updateProduct } from "../../controllers/products/updateProduct.js";

const routerGet = Router();

// funcion comodin para testear cualquier logica
routerGet.get("/allUsers", (req, res) => {
  res.send({ msj: "hola" });
});

routerGet.route("/allProducts").get((req, res) => {
  res.status(200).send("hoal");
});

routerGet
  .route("/product")
  .get(getProducts)
  .post(createProduct)
  .patch(updateProduct);

routerGet.route("/init").get(initRegisterHandler);

routerGet.route("/allAdmins").get();

export default routerGet;
