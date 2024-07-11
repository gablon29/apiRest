import { Router } from "express";
import { createAtetion } from "../../controllers/createAtention.js";

const routerPost = Router();

routerPost.post("/create", createAtetion);

export default routerPost;
