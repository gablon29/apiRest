import { User } from "../user-repository.js";

export const createUser = (req, res) => {
  const { username, password } = req.body;
  const user = User.findOne({ username });
  if (user) throw new Error("username already exists");
  User.create({
    id: "1",
    username: username,
    password: password,
  }).save();
  return res.status(200).send({ message: "user create exist" });
};
