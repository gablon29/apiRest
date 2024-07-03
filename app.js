import express, { urlencoded } from "express";
import morgan from "morgan";
import router from "./routes/index.js";
import { errorHandlers } from "./middlewares/errorHandlers.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express({ urlencoded: true }));

app.use(router);
app.use(errorHandlers);

export default app;
