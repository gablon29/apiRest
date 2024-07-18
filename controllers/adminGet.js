import { getAdmins } from "../handlers/adminHandlers.js";

export const adminGet = async (req, res) => {
  try {
    const admins = await getAdmins();
    res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
