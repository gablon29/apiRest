import { Router } from "express";
import { createUser } from "../../controllers/user/createUser.js";
import { getUserByID } from "../../controllers/user/getUserByID.js";
import { updateUser } from "../../controllers/user/updateUser.js";
import { userValidation } from "../../middlewares/validations/userValidation.js";
const router = Router();

router.route("/users")
.post(userValidation, createUser)
.get(getUserByID)
.patch(updateUser)
.delete();
