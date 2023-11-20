import express from "express";
const router = express.Router();
// import product from "../data/Product.js";
import {
  getProducts,
  getProductById,
  getTopProducts,
} from "../controllers/productControllers.js";

router.get("/top", getTopProducts);

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
