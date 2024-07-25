import { deleteUsers } from "../handlers/UsersHandlers.js";

export const deleteUsersControllers = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await deleteUsers(id);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el controlador de deleteUsers");
  }
};
// Compare this snippet from routes/DELETE/rqDelete.js:
