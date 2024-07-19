import { getAllUsersHandler } from "../handlers/userHandlers.js";

export const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsersHandler();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
