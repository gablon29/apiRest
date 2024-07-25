import { productServices } from "../../services/productServices.js";

export const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await productServices.createProduct(product);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
