import { userServices } from "../../services/userServices.js";

export const deleteUser = async (req, res, next) => {
  const { id } = req.query;
  try {
    const user = await userServices.deleteUser(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
    res.status(500).json({ error: error.message });
  }
};
