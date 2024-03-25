import Navbar from "@/components/Navbar/Navbar";
import ProductDetailGallery from "@/components/ProductDetailPage/ProductDetailGallery";
import ProductDetailInfo from "@/components/ProductDetailPage/ProductDetailInfo";
import ProductDetailItem from "@/components/ProductDetailPage/ProductDetailItem";
import ProductDetailOthers from "@/components/ProductDetailPage/ProductDetailOthers";
import Summary from "@/components/Summary";
import ProductData from "@/interfaces/product";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import data from "../../data.json";

export const getServerSideProps = (async (context) => {
  const Products = data as ProductData[];
  let slug = context.params?.slug;

  let productDetail: any = Products.find((product) => product.slug === slug);

  return { props: { productDetail } };
}) satisfies GetServerSideProps<{ productDetail: any }>;

export default function ProductDetail({
  productDetail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  return (
    <div className="w-full max-w-[1110px] mx-auto flex flex-col gap-6 px-6 md:px-10 lg:px-0 mt-[106px] md:mt-[122px] lg:mt-[170px] mb-[120px]">
      <button
        className="self-start text-Black opacity-50 hover:text-Orange hover:opacity-100"
        onClick={() => router.back()}
      >
        Go Back
      </button>

      <section className="flex flex-col gap-[88px] ">
        <ProductDetailItem
          slug={productDetail.slug}
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
