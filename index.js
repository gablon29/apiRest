import "dotenv/config";
import app from "./app.js";
const { PORT } = process.env;
import sequelize from "./db.js";
import Users from "./models/Users.js";

sequelize.sync({ alter: true }).then(() => {
  console.log(Users === sequelize.models.Users);
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});
