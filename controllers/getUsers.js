import {
  getAllUsersHandlers,
  getUserByIdHandlers,
} from "../handlers/UsersHandlers.js";

export const getUsersControllers = async (req, res) => {
  if (!req.params.id) {
    try {
      const users = await getAllUsersHandlers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error en el controlador de getUsers");
    }
  } else {
    try {
      const { id } = req.params;
      const users = await getUserByIdHandlers(id);
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error en el controlador de getUsers");
    }
  }
};
