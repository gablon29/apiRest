import { Router } from "express";
import routerGet from "./GET/rqGet.js";
import routerPost from "./POST/postUser.js";
import routerProdutc from "./product/index.js";

const router = Router();

router.use("/", routerGet);
router.use("/", routerPost);
router.use("/", routerProdutc);

export default (app) => {
  app.use("/api", router);
};
