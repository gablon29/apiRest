import model from "../models/config/associations.js";

export const getUsersControllers = async (req, res) => {
  try {
    const users = await model.Users.findAll({
      include: {
        association: "city",
        attributes: ["name"],
      },
    })
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el controlador de getUsers");
  }
};
