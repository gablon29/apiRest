import { PORT } from "./utils/enviroment.js";
import app from "./routes/app.js";

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
