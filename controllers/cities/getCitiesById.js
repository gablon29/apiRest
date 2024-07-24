import { getCityByIdHandler } from "../../handlers/citiesHandles.js";

export default async (req, res) => {
  const { id } = req.params;
  try {
    const city = await getCityByIdHandler(id);
    res.status(200).json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
