import "dotenv/config";
import app from "./app.js";
const { PORT } = process.env;
import sequelize from "./db.js";

sequelize.sync({ alter: true }).then(() => {
  console.log("Db connect");
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
  1;
});
