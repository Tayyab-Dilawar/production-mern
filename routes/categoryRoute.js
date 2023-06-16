import express from "express";

import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createCategoryController,
  categoryController,
  updateCategoryController,
  singleCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController.js";

//router object
const router = express.Router();

//routes
//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//FORGET PASSWORD || METHOD POST
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get all category
router.get("/get-category", categoryController);

// single category
router.get("/single-category/:slug", singleCategoryController);

// delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
