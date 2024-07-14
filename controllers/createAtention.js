import moment from "moment";
import { Users } from "../models/config/index.js";
import { validation } from "../utils/validationInput.js";

export const createAtetion = async (req, res, next) => {
  const resValidation = validation(req.body);
  if (resValidation) {
    return res.status(400).json(resValidation);
  }
  const { name, disponible } = req.body;
  try {
    await Users.create({
      name,
      disponible: moment(disponible, "HH:mm:ss").format("HH:mm:ss"),
    });
    res.status(200).json({ msg: "usuario creado" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
    next();
  }
};
