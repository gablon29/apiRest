import { userService } from "../services/userServices.js";

export const createUser = async (body) => {
  const { name, disponible, cityId } = body;
  try {
    const user = await userService.createUser(name, disponible, cityId);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllUsersHandler = async () => {
  try {
    const users = await userService.getUsers();
    return users;
  } catch (error) {
    throw new Error(error);
  }
};
