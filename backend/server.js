import express from "express";
import products from "../backend/data/products.js";
import dotenv from "dotenv";
import colors from "colors";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDb();
const app = express();

app.use(express.json());

// Port
const PORT = process.env.PORT || 5000;

// Routes
app.get("/", (req, res) => {
  res.send("Api is Running..");
});

app.use("/api/v1/products", productRoutes);
// Middlewares
app.use(notFound);
app.use(errorHandler);

// Listener
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT} in ${process.env.MODE} mode`);
});
