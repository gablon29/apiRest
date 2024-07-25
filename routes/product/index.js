import { Router } from "express";
import { getProducts } from "../../controllers/products/getProduct.js";
import { createProduct } from "../../controllers/products/createProduct.js";
import { updateProduct } from "../../controllers/products/updateProduct.js";
import { verifyProduct } from "../../handlers/productHandlers.js";

const router = Router();

router
  .route("/product")
  .get(getProducts)
  .post(verifyProduct ,createProduct)
  .patch(updateProduct);

export default router;
