import Users from "../models/Users.js";
import Cities from "../models/Cities.js";

class UserServices {
  async getAllUsers() {
    return await Users.findAll({
      include: {
        association: "city",
        attributes: ["name"],
      },
    });
  }

  async getUserById(id) {
    return await Users.findByPk(id);
  }

  async createUser({ name, cityId }) {
    return await Users.create({ name, cityId });
  }

  async updateUser(id, user) {
    return await Users.update(user, { where: { id } });
  }

  async deleteUser(id) {
    return await Users.destroy({ where: { id } });
  }
}
export const userServices = new UserServices();
