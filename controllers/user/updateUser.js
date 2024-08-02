import { updateUserObject } from "../../handlers/userHandlers.js";
import { userServices } from "../../services/userServices.js";

export const updateUser = async (req, res) => {
    try {
        const { id } = req.query;
        const oldUser = await userServices.getUserById(id);
        const newUser = await updateUserObject(req.body, oldUser)
        const user = await userServices.updateUser(newUser, { 
            where: { id: id }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};