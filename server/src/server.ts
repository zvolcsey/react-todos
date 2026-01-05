import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} in ${ENV} mode`);
  console.log(`API docs available at http://localhost:${PORT}/api-docs/v1`);
});
