import { userServices } from "../../services/userServices";

export const getUserByID = async (req, res, next) => {
  try {
    const user = await userServices.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
    res.status(500).json({ error: error.message });
  }
};
