import { Request, Response } from "express";
import { ProductModel } from "../models/Product";

// @desc    Get All Products
// @route   POST /api/v1/products
// @access  Public
// @role    User
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    let query;

    // Copy req.query
    const reqQuery = { ...req.query };

    if (reqQuery.section_name) {
      query = ProductModel.find({ section_name: req.query.section_name });
    } else {
      query = ProductModel.find();
    }

    const products = await query;

    res.status(200).json({
      success: true,
      count: products.length,
      data: products.reverse(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error:
        error instanceof Error ? error.message : "Request failed try again",
    });
  }
};
