import { userServices } from "../../services/userServices.js";
import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env; // generar la varible de entorno

export const login = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userServices.login(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log(token);
    res.status(200).json({
      message: "User logged in",
      token,
      user,
    });
  } catch (error) {
    next(error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// proporcionar un token al usuario que se loguea
