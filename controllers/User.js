import { User } from "../user-repository.js";
import crypto from "crypto";

export const createUser = (req, res) => {
  const { username, password } = req.body;
  const user = User.findOne({ username: username });
  if (user) throw new Error("username already exists");
  const id = crypto.randomUUID();
  User.create({
    _id: id,
    username,
    password,
  }).save();
  return res.status(200).send({ message: "user create exist" });
};
