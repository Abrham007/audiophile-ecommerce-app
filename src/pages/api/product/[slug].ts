import ProductData from "@/interfaces/product";
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data.json";

const Products = data as ProductData[];

type Data = {
  products: ProductData[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let currentProduct = Products.filter(
    (product) => product.category === req.query.slug
  );

  res.status(200).json({ products: currentProduct });
}
