import User from "../repository/User.js";

export const getAllUser = async (req, res, next) => {
  const users = await User.find();
  res.json({ users: users });
};
