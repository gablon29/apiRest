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

  async login(email) {
    return await model.Users.findOne({
      where: { email },
    });
  }

  async getUserById(id) {
    return await model.Users.findByPk(id);
  }

  async createUser(user) {
    return await model.Users.create(user);
  }

  async updateUser(id, user) {
    return await model.Users.update(user, { where: { id } });
  }

  async deleteUser(id) {
    return await model.Users.destroy({ where: { id } });
  }
}
export const userServices = new UserServices();
