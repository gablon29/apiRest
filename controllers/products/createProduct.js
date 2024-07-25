import { verifyProduct } from "../../handlers/productHandlers.js";
import { productServices } from "../../services/productServices.js";

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = await productServices.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
