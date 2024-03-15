import Navbar from "@/components/Navbar/Navbar";
import ProductHeader from "@/components/ProductPage/ProductHeader";
import ProductList from "@/components/ProductPage/ProductList";

import Summary from "@/components/Summary";

export default function Headphone() {
  return (
    <div className="flex flex-col">
      <ProductHeader title="headphones"></ProductHeader>
      <section className="flex flex-col gap-[120px] px-6 md:px-10 lg:px-0 mt-[64px] mb-[120px] md:my-[120px] lg:my-[160px] ">
        <ProductList></ProductList>
        <Navbar></Navbar>
        <Summary></Summary>
      </section>
    </div>
  );
}
