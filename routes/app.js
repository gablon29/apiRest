import express from "express";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("combined"));

app.use((err, res, req, next) => {
  console.error(err.stack);
  res.status(400).send("ups algo salio mal");
});

export default app;
