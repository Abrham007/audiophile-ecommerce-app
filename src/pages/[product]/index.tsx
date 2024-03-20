import Navbar from "@/components/Navbar/Navbar";
import ProductHeader from "@/components/ProductPage/ProductHeader";
import ProductList from "@/components/ProductPage/ProductList";

import Summary from "@/components/Summary";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import ProductData from "@/interfaces/product";

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          product: "headphones",
        },
      },
      {
        params: {
          product: "earphones",
        },
      },
      {
        params: {
          product: "speakers",
        },
      },
    ],
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  let productName = context.params?.product;
  const res = await fetch(`http://localhost:3000/api/product/${productName}`);
  const productList = await res.json();

  return { props: { currentProduct: productList } };
}) satisfies GetStaticProps<{
  currentProduct: ProductData[];
}>;

export default function Product({
  currentProduct,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  let currentProductList = currentProduct?.products || [];
  let title = currentProductList[0]?.category || "";

  return (
    <div className="flex flex-col">
      <ProductHeader title={title}></ProductHeader>
      <section className="flex flex-col gap-[120px] px-6 md:px-10 lg:px-0 mt-[64px] mb-[120px] md:my-[120px] lg:my-[160px] ">
        <ProductList list={currentProductList}></ProductList>
        <Navbar></Navbar>
        <Summary></Summary>
      </section>
    </div>
  );
}
