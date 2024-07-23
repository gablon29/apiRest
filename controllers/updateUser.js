import { updateUsers } from "../handlers/UsersHandlers";

export const updateUserControllers = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await updateUsers(req.body, id);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el controlador de updateUser");
  }
};

// Compare this snippet from routes/PATCH/rqPatch.js:
