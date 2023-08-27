import { Request, Response } from "express";

// @desc    Get All Products
// @route   POST /api/v1/products
// @access  Public
// @role    User
export const getAllProducts = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: { products: "product 1" } });
};
