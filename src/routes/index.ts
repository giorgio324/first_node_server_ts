import express from "express";
import { productsRoute } from "./ProductRoute";
export const routes = express.Router();
routes.use(productsRoute);
