import { Router } from "express";
import { createUser } from "../../controllers/user/createUser.js";
import { validateUser } from "../../handlers/userHandlers.js";
import { getUserByID } from "../../controllers/user/getUserByID.js";
import { updateUser } from "../../controllers/user/updateUser.js";
const router = Router();

router.route("/users")
.post(validateUser, createUser)
.get(getUserByID)
.patch(updateUser)
.delete();
