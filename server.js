import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

// env config
dotenv.config();

// connection db
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/v1/auth", authRoutes);

// rest object
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Waste Management Portal</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
