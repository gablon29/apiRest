import { userServices } from "../services/userServices.js";

export const createUsersHandlers = async (body) => {
  try {
    const { name, cityId } = body;
    const users = await userServices.createUser({ name, cityId });
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Error en el controlador de createUsersHandlers");
  }
};

export const getAllUsersHandlers = async () => {
  try {
    const users = await userServices.getAllUsers();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Error en el controlador de getAllUsersHandlers");
  }
};
