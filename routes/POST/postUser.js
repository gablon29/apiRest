import { Router } from "express";
import { createUserController } from "../../controllers/createUser.js";
import createProduct from "../../controllers/createProd.js";
import { adminPost } from "../../controllers/adminPost.js";

const routerPost = Router();

routerPost.post("/user_create", createUserController);
routerPost.post("/cP", createProduct);
routerPost.post("/admin", adminPost);

export default routerPost;
