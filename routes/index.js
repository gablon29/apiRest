import { Router } from "express";
import routerGet from "./GET/rqGet.js";

const router = Router();

router.use("/", routerGet);

export default router;
