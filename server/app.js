import express from "express";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import { config } from "dotenv";

config();
const { CLIENT_URL } = process.env;

const corsOption = {
  origin: CLIENT_URL,
}
const app = express();
app.use(express.json());
app.use(cors(corsOption));
app.use("/api/v1/user", userRoute);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found",
    error: "The requested resource could not be found.",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
});

export default app;
