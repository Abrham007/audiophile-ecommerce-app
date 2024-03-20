import Navbar from "@/components/Navbar/Navbar";
import ProductDetailGallery from "@/components/ProductDetailPage/ProductDetailGallery";
import ProductDetailInfo from "@/components/ProductDetailPage/ProductDetailInfo";
import ProductDetailItem from "@/components/ProductDetailPage/ProductDetailItem";
import ProductDetailOthers from "@/components/ProductDetailPage/ProductDetailOthers";
import Summary from "@/components/Summary";

export default function HeadphoneDetail() {
  return (
    <div className="w-full max-w-[1110px] mx-auto flex flex-col gap-6 px-6 md:px-10 lg:px-0 mt-[106px] md:mt-[122px] lg:mt-[170px] mb-[120px]">
      <button className="self-start">Go Back</button>

      <section className="flex flex-col gap-[88px] ">
        <ProductDetailItem
          title="XX99 Mark II Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        ></ProductDetailItem>
        <ProductDetailInfo features="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."></ProductDetailInfo>
        <ProductDetailGallery></ProductDetailGallery>
        <ProductDetailOthers></ProductDetailOthers>
        <Navbar></Navbar>
        <Summary></Summary>
      </section>
    </div>
  );
}
