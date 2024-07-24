import Cities from "../models/Cities.js";
import Users from "../models/Users.js";

class CitiesServices {
  async getAllCities() {
    try {
      return await Cities.findAll({
        include: {
          model: Users,
          attributes: ["name"],
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
  async getCityById(id) {
    try {
      return await Cities.findByPk(id);
    } catch (error) {
      console.error(error);
      throw new Error("Error en la base de datos");
    }
  }
}

export const citiesServices = new CitiesServices();
