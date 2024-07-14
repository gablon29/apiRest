import axios from "axios";
import Products from "../models/Products.js";
import "dotenv/config";
const { API_URL_BASE, x_apihub_host, x_apihub_endpoint, x_apihub_key } =
  process.env;

const myHeaders = {
  "x-apihub-key": `${x_apihub_key}`,
  "x-apihub-host": `${x_apihub_host}`,
  "x-apihub-endpoint": `${x_apihub_endpoint}`,
};

export const initRegisterHandler = async (req, res) => {
  try {
    const response = await axios.get(API_URL_BASE, {
      headers: myHeaders,
    });
    const data = await response.data.data.products;
    await data.forEach(({ product_title }) => {
      Products.create({
        name: product_title,
      });
    });
    const responsee = await Products.findAll();
    res.status(200).send(responsee);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
