import "dotenv/config";
import app from "./app.js";
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
