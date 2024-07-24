import { citiesServices } from "../services/citiesServices.js";

export const getAllCitiesHandler = async () => {
  return await citiesServices.getAllCities();
};

export const getCityByIdHandler = async (id) => {
  return await citiesServices.getCityById(id);
};
