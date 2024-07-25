import { verifyProduct } from "../../handlers/productHandlers.js";
import { productServices } from "../../services/productServices.js";

export const createProduct = async (req, res, next) => {
  try {
    verifyProduct(req.body, next);
    const product = req.body;
    const newProduct = await productServices.createProduct(product);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
    res.status(500).json({ error: error.message });
  }
};
