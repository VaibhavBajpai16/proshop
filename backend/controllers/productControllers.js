import asyncHandler from "../middleware/asyncHandler.js";
import Productt from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {
  const product = await Productt.find({});
  res.json(product);
});

// @desc Fetch a products
// @route GET /api/products/:id
// @access Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Productt.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error(" Resources not found ");
  }
});

//@desc Get top rated products
//@route GET /api/products/top
//@access Public

const getTopProducts = asyncHandler(async (req, res) => {
  const product = await Productt.find({}).sort({ rating: -1 }).limit(3);

  res.status(200).json(product);
});

export { getProducts, getProductById, getTopProducts };
