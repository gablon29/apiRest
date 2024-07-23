import { citiesServices } from "../services/citiesServices.js";

export const getAllCitiesHandler = async () => {
  return await citiesServices.getAllCities();
};
