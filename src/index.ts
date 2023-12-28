import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { routes } from "./routes";

const app = express();

dotenv.config();

const { PORT, MONGO_URL } = process.env;
mongoose
  .connect(MONGO_URL!)
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((e) => console.log(e));
const port = PORT || 8000;

/* middleware for json */
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
