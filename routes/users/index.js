import { Router } from "express";
import { createUser } from "../../controllers/user/createUser.js";
import { validateUser } from "../../handlers/userHandlers.js";
const router = Router();

router.route("/users").post(validateUser, createUser);
