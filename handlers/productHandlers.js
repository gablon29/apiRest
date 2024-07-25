export const verifyProduct = (req, res, next) => {
  const { name } = req.body;
  
  if (!name || !price || !description || !stock || !image) {
    return res.status(400).json({ message: "Missing fields" });
  }
  if (typeof name !== "string") {
    return res.status(400).json({ message: "The name must be a string" });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: "The name must have at least 3 characters" });
  }
  if (name.length > 30) {
    return res.status(400).json({ message: "The name must have less than 30 characters" });
  }
  next();
};
