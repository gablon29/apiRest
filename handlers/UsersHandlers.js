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

export const getUserByIdHandlers = async (id) => {
  try {
    const users = await userServices.getUserById(id);
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Error en el controlador de getUserByIdHandlers");
  }
};

export const updateUsers = async (body, id) => {
  try {
    const users = await userServices.updateUser(id, body);
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Error en el controlador de updateUsers");
  }
};

export const deleteUsers = async (id) => {
  try {
    const users = await userServices.deleteUser(id);
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Error en el controlador de deleteUsers");
  }
};
