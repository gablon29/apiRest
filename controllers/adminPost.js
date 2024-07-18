import { adminCreate } from "../handlers/adminHandlers.js";

export const adminPost = async (req, res) => {
  try {
    const { username } = req.body;
    console.log(username);
    const admin = await adminCreate(username);
    res.status(201).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
