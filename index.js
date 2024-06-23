import express from "express";
import { PORT } from "./config.js";
import { createUser } from "./controllers/User.js";
import { UserRepository } from "./user-repository.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {});

app.post("/login", createUser);
app.post("/logout", (req, res) => {});
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log({ username });
  try {
    const id = UserRepository.create({ username, password });
    res.send({ id });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/protected", (req, res) => {});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
