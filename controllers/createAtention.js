import moment from "moment";
import { Users } from "../models/index.js";

export const createAtetion = async (req, res) => {
  const { name, disponible } = req.body;
  await Users.create({
    name,
    disponible: moment(disponible, "HH:mm:ss").format("HH:mm:ss"),
  });
  res.status(200).json({ msg: "usuario creado" });
};
