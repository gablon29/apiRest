import { Router } from "express";
import { fetch_data } from "../../controllers/getData.js";

const routerGet = Router();

routerGet.get("/", (req, res) => {});

routerGet.get("/fetch_data", fetch_data);

export default routerGet;
