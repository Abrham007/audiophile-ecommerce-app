import OthersItem from "./OtherItem";

export default function ProductDetailOthers() {
  return (
    <div className="flex flex-col gap-10 md:gap-14 lg:gap-16 items-center">
      <h2 className="text-xl text-Black leading-9 tracking-[0.05356rem] md:text-xl3 uppercase">
        you may also like
      </h2>
      <ul className="w-full flex flex-col md:flex-row gap-14 md:gap-[11px] lg:gap-0 md:justify-between">
        <OthersItem title="XX99 MARK I"></OthersItem>
        <OthersItem title="XX59"></OthersItem>
        <OthersItem title="ZX9 SPEAKER"></OthersItem>
      </ul>
    </div>
  );
}
