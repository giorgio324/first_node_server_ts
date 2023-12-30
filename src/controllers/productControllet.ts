import { RequestHandler } from "express";
import { Product } from "../models/Product";

export const getAllProducts: RequestHandler = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getSingleProduct: RequestHandler = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addProduct: RequestHandler = async (req, res) => {
  const { name } = req.body;
  try {
    await Product.create({ name });
    return res.status(201).json({ name });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Oops.. Something went wrong" });
  }
};
