export const verifyProduct = (body, next) => {
  const { name, price, description, stock, image } = req.body;
  if (name && price && description && stock && image) {
    next();
  } else {
    throw new Error("Missing fields");
  }
};
