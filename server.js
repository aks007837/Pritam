import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import morgan from "morgan";

// express app
const app = express();
//config
dotenv.config();
const PORT = process.env.PORT;
connectDB();
// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Adding routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("This is my server");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
