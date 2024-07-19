import { createUsersHandlers } from "../handlers/UsersHandlers.js";

export const createUserControllers = async (req, res) => {
  try {
    const users = await createUsersHandlers(req.body);
    res.status(201).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el controlador de createUser");
  }
};
