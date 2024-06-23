import dbLocal from "db-local";
import crypto from "crypto";
const { Schema } = new dbLocal({ path: "./db" });

export const User = Schema("User", {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export class UserRepository {
  static create({ username, password }) {
    const id = crypto.randomUUID();
    User.create({
      _id: id,
      username,
      password,
    }).save();
    return id;
  }
  static login({ username, password }) {}
}
