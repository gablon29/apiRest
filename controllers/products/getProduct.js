import { productServices } from "../../services/productServices.js";

export const getProducts = async (req, res, next) => {
  if (!req.query) {
    // Check if there are no query parameters
    try {
      const products = await productServices.getProducts();
      res.status(200).json(products);
    } catch (error) {
      next(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    try {
      const { IdProduct } = req.query;
      const products = await productServices.getProducts(IdProduct);
      res.status(200).json(products);
    } catch (error) {
      next(error);
      res.status(500).json({ error: error.message });
    }
  }
};
