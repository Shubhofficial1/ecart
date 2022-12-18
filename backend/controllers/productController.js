import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc        Fetch all products
// @route       GET /api/v1/products
// @access      public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc        Get Single Product by ID
// @route       /api/v1/products/:id
// @access      public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(400);
    throw new Error("product not found");
  }
});

export { getProducts, getProductById };
