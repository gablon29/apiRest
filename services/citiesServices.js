import model from "../models/config/associations.js";

class CitiesServices {
  async getAllCities() {
    try {
      return await model.Cities.findAll({
        include: {
          associations: "users",
          attributes: ["name"],
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export const citiesServices = new CitiesServices();
