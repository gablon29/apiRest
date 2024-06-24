import express from "express";
import { PORT } from "./config.js";
import { createUser } from "./controllers/User.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {});

app.post("/login", createUser);
app.post("/logout", (req, res) => {});
app.post("/register", (req, res) => {});

app.get("/protected", (req, res) => {});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
