import express from "express";
import { productsRoute } from "./ProductRoute";
import { calcRoute } from "./CalcRoute";
export const routes = express.Router();
routes.use(productsRoute);
routes.use(calcRoute);
