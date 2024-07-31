import { userServices } from "../../services/userServices.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await userServices.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
    res.status(500).json({ error: error.message });
  }
};
