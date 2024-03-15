import ProductItem from "@/components/ProductPage/ProductItem";
export default function ProductList() {
  return (
    <ul className="w-full max-w-[1110px] mx-auto flex flex-col gap-[120px] lg:gap-[160px]">
      <ProductItem
        title="XX99 Mark II Headphones"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        isNew
      ></ProductItem>
      <ProductItem
        title="XX99 Mark II Headphones"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        isNew
      ></ProductItem>
      <ProductItem
        title="XX99 Mark II Headphones"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        isNew
      ></ProductItem>
    </ul>
  );
}
