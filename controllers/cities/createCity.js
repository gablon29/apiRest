import model from '../../models/config/associations.js'
import { validationName } from '../../utils/validationInput.js';


export const createCity = async (req, res, next) => {
    try {
        const { name } = req.body;
        const error = validationName(name);
        if (error) {
            return res.status(400).json({ message: error });
        }
        const city = await model.Cities.create({ name });
        res.status(201).json(city);
    } catch (error) {
        next(error);
    }
}