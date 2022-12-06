import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @desc        FETCH ALL PRODUCTS
// @route       GET /api/v1/products
// @access      PUBLIC
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc        FETCH A SINGLE PRODUCT BY ID
// @route       GET /api/v1/products/:id
// @access      PUBLIC
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  })
);

export default router;
