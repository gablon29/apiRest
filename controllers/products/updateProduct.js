import { productServices } from "../../services/productServices.js";

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.query;
    const product = req.body;
    const updatedProduct = await productServices.updateProduct(id, product);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
