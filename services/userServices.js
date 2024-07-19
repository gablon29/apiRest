import { Users, Cities } from "../models/config/index.js";
class UserService {
  async createUser(name, disponible, cityId) {
    return await Users.create({ name, disponible, cityId });
  }

  async getUsers() {
    return await Users.findAll({
      include: {
        model: Cities,
        attributes: ["name"],
      },
    });
  }
}

export const userService = new UserService();
