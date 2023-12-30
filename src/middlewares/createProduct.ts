import { NextFunction, Request, Response } from "express";
type respType = {
  name: string;
};
export const createProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name }: respType = req.body;
  if (!name) {
    return res.status(422).send({ msg: "name must not be empty" });
  }
  const trimmedName = name.trim();
  if (!trimmedName) {
    return res
      .status(422)
      .send({ msg: "name must not contain spaces before or after" });
  }
  return next();
};
