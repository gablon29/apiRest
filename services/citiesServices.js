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
}

export const citiesServices = new CitiesServices();