const express = require("express");
const products = require("./products.js");
const dotenv = require('dotenv')
dotenv.config()

const app = express();

// Port
const PORT = process.env.PORT || 5000;

// routes

app.get("/", (req, res) => {
  res.send("Api is Running..");
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// Listener
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT} in ${process.env.MODE} mode`);
});