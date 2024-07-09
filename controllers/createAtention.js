import moment from "moment";
import { Users } from "../models/Users.js";

export const createAtetion = async (req, res) => {
  const { name, disponible } = req.body;
  await Users.create({
    name,
    disponible: moment(disponible, "HH:mm:ss").format("HH:mm:ss"),
  })
    .then((disp) => console.log(disp))
    .catch((err) => console.error(err));
};
