import { getAllCitiesHandler } from "../../handlers/citiesHandles.js";

export const getAllCities = async (req, res) => {
  try {
    const cities = await getAllCitiesHandler();
    res.status(200).json(cities);
  } catch (error) {
    console.error(error);
  }
};
