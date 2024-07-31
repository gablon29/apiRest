import { citiesServices } from "../services/citiesServices.js";

export const validateUser = async (req, res, next) => {
  const { name, cityId } = req.body;
  await validateCity(cityId);
  if (!name || !cityId) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (typeof name !== "string" || typeof cityId !== "number") {
    return res.status(400).json({ error: "Invalid data type" });
  }
  if (name.length < 3) {
    return res.status(400).json({ error: "Name is too short" });
  }
  if (name.length > 50) {
    return res.status(400).json({ error: "Name is too long" });
  }
  next();
};

const validateCity = async (id) => {
  const city = await citiesServices.getCityById(id);
  if (!city) {
    throw new Error("City does not exist");
  }
};
