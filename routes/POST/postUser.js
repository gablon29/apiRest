import { Router } from "express";
import { createAtetion } from "../../controllers/createAtention.js";

const routerPost = Router();

routerPost.post("/user_create", createAtetion);

export default routerPost;
