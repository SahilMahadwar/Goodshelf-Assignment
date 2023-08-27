import express from "express";

import { getAllProducts } from "../controllers";

export const productsRouter = express.Router();

productsRouter.route("/").get(getAllProducts);
