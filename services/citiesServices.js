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
