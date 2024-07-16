import { Router } from "express";
import routerGet from "./GET/rqGet.js";
import routerPost from "./POST/postUser.js";

const router = Router();

router.use("/", routerGet);
router.use("/", routerPost);

export default (app) => {
  app.use("/api", router);
};
