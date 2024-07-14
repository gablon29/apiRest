import Producst from "../models/Products.js";

const createProduct = async (req, res) => {
  await Producst.create({
    name: "gabriel",
  });
  res.status(200).send("pr creado");
};

export default createProduct;
