import ProductData from "@/interfaces/product";
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data.json";

const Products = data as ProductData[];

type Data = {
  product?: ProductData;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let currentProduct = Products.find(
    (product) => product.slug === req.query.slug
  );

  res.status(200).json({ product: currentProduct });
}
