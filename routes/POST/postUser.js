import { Router } from "express";
import { createAtetion } from "../../controllers/createAtention.js";
import createProduct from "../../controllers/createProd.js";
import { adminPost } from "../../controllers/adminPost.js";

const routerPost = Router();

routerPost.post("/user_create", createAtetion);
routerPost.post("/cP", createProduct);
routerPost.post("/admin", adminPost);

export default routerPost;
