import ProductItem from "@/components/ProductPage/ProductItem";
import ProductData from "@/interfaces/product";

type ProductListProps = {
  list: ProductData[];
};
export default function ProductList({ list }: ProductListProps) {
  return (
    <ul className="w-full max-w-[1110px] mx-auto flex flex-col gap-[120px] lg:gap-[160px]">
      {list.reverse().map((item, index) => (
        <ProductItem
          key={item.id}
          order={index}
          title={item.name}
          description={item.description}
          isNew={item.new}
          imageSrc={item.categoryImage}
        ></ProductItem>
      ))}
    </ul>
  );
}
