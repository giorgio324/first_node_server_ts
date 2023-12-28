import { Router } from "express";
import {
  getAllProducts,
  getSingleProduct,
} from "../controllers/productControllet";

export const productsRoute = Router();

productsRoute.get("/products", getAllProducts);
productsRoute.get("/products/:id", getSingleProduct);
