import Products from "../models/Products";

export const getAllProduct = async (req, res) => {
  try {
    const respnse = await Products.findAll();
    res.status(200).json(respnse);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};
