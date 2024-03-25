import Navbar from "@/components/Navbar/Navbar";
import ProductHeader from "@/components/ProductPage/ProductHeader";
import ProductList from "@/components/ProductPage/ProductList";
import Summary from "@/components/Summary";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import ProductData from "@/interfaces/product";
import data from "../../data.json";

export const getServerSideProps = (async (context) => {
  const Products = data as ProductData[];

  let productName = context.params?.product;

  const productList: ProductData[] = Products.filter(
    (product) => product.category === productName
  );

  let currentProductList = productList?.reverse() || [];
  let title = currentProductList[0]?.category || "";

  return { props: { currentProductList, title } };
}) satisfies GetServerSideProps<{
  currentProductList: any[];
  title: string;
}>;

export default function Product({
  currentProductList,
  title,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
