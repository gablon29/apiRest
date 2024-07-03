import { Router } from "express";
import { createUser } from "../../controllers/createUser.js";

const routerPost = Router();

routerPost.post("/create", createUser);

export default routerPost;
