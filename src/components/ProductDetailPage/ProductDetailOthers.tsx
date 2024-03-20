import OthersItem from "./OtherItem";

type ProductDetailOthersProps = {
  others: {
    name: string;
    slug: string;
    image: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  }[];
};
export default function ProductDetailOthers({
  others,
}: ProductDetailOthersProps) {
  return (
    <div className="flex flex-col gap-10 md:gap-14 lg:gap-16 items-center">
      <h2 className="text-xl text-Black leading-9 tracking-[0.05356rem] md:text-xl3 uppercase">
        you may also like
      </h2>
      <ul className="w-full flex flex-col md:flex-row gap-14 md:gap-[11px] lg:gap-[30px] md:justify-between">
        {others.map((item) => (
          <OthersItem
            title={item.name}
            imageSrc={item.image}
            slug={item.slug}
          ></OthersItem>
        ))}
      </ul>
    </div>
  );
}
