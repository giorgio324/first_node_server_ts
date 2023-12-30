import { Router } from "express";
import {
  getAllProducts,
  getSingleProduct,
  addProduct,
} from "../controllers/productControllet";
import { createProduct } from "../middlewares/createProduct";

export const productsRoute = Router();

productsRoute.get("/products", getAllProducts);
productsRoute.get("/products/:id", getSingleProduct);
productsRoute.post("/products", [createProduct], addProduct);
