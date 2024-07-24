import { Router } from "express";
import createProduct from "../../controllers/createProd.js";
import { adminPost } from "../../controllers/adminPost.js";
import { createUserControllers } from "../../controllers/createUser.js";

const routerPost = Router();

routerPost.post("/user_create", createUserControllers);
routerPost.post("/cP", createProduct);
routerPost.post("/admin", adminPost);

export default routerPost;
