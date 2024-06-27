import express from "express";
import morgan from "morgan";
import router from "./routes/index.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/", router);

app.use((err, res, req, next) => {
  console.error(err.stack);
  res.status(400).send("ups algo salio mal");
});

export default app;
