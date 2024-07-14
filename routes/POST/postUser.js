import { Router } from "express";
import { createAtetion } from "../../controllers/createAtention.js";
import createProduct from "../../controllers/createProd.js";

const routerPost = Router();

routerPost.post("/user_create", createAtetion);
routerPost.post("/cP", createProduct);

export default routerPost;
