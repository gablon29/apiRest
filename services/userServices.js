import model from "../models/config/associations.js";

class UserServices {
  async getAllUsers() {
    return await model.Users.findAll({
      include: {
        association: "city",
        attributes: ["id", "name"],
      },
    });
  }

  async getUserById(id) {
    return await Users.findByPk(id);
  }

  async createUser({ name, cityId }) {
    return await model.Users.create({ name, cityId });
  }

  async updateUser(id, user) {
    return await Users.update(user, { where: { id } });
  }

  async deleteUser(id) {
    return await Users.destroy({ where: { id } });
  }
}
export const userServices = new UserServices();
