import Navbar from "@/components/Navbar/Navbar";
import ProductDetailGallery from "@/components/ProductDetailPage/ProductDetailGallery";
import ProductDetailInfo from "@/components/ProductDetailPage/ProductDetailInfo";
import ProductDetailItem from "@/components/ProductDetailPage/ProductDetailItem";
import ProductDetailOthers from "@/components/ProductDetailPage/ProductDetailOthers";
import Summary from "@/components/Summary";
import ProductData from "@/interfaces/product";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export const getServerSideProps = (async (context) => {
  let slug = context.params?.slug;
  const res = await fetch(`http://localhost:3000/api/detail/${slug}`);
  const resData = await res.json();

  const productDetail: ProductData = resData.product;

  return { props: { productDetail } };
}) satisfies GetServerSideProps<{ productDetail: ProductData }>;

export default function ProductDetail({
  productDetail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="w-full max-w-[1110px] mx-auto flex flex-col gap-6 px-6 md:px-10 lg:px-0 mt-[106px] md:mt-[122px] lg:mt-[170px] mb-[120px]">
      <button className="self-start">Go Back</button>

      <section className="flex flex-col gap-[88px] ">
        <ProductDetailItem
          title={productDetail.name}
          description={productDetail.description}
          price={productDetail.price}
          isNew={productDetail.new}
          imageSrc={productDetail.image}
        ></ProductDetailItem>
        <ProductDetailInfo
          features={productDetail.features}
          includes={productDetail.includes}
        ></ProductDetailInfo>
        <ProductDetailGallery
          gallery={productDetail.gallery}
        ></ProductDetailGallery>
        <ProductDetailOthers
          others={productDetail.others}
        ></ProductDetailOthers>
        <Navbar></Navbar>
        <Summary></Summary>
      </section>
    </div>
  );
}
