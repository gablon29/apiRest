import express from "express";
import morgan from "morgan";
import routerAplication from "./routes/index.js";
import { errorHandlers } from "./middlewares/errorHandlers.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express({ urlencoded: true }));

routerAplication(app);
app.use(errorHandlers);

export default app;
