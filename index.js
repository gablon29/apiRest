import "dotenv/config";
import app from "./app.js";
const { PORT } = process.env;
import db from "./db/conexionDB.js"

db.conn.sync({ alter: true }).then(() => {
  console.log("DB connect!");
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});
