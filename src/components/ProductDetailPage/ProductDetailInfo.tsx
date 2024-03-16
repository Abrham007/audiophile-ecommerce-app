type ProductDetailInfoProps = {
  features: string;
};
export default function ProductDetailInfo({
  features,
}: ProductDetailInfoProps) {
  let featuresList = features.split("\\n\\n");

  return (
    <div className="flex flex-col lg:flex-row gap-[88px] lg:gap-[125px]">
      <div className="w-full lg:w-[635px] flex flex-col gap-6 md:gap-8">
        <h2 className="text-xl text-Black leading-9 tracking-[0.05356rem] md:text-xl3 uppercase">
          FEATURES
        </h2>
        {featuresList.map((feature, index) => (
          <p key={index} className=" text-base text-Black opacity-50">
            {feature}
          </p>
        ))}
      </div>
      <div className="w-full md:w-[549px] flex flex-col md:flex-row lg:flex-col gap-6 lg:gap-8 md:justify-between lg:justify-start">
        <h2 className="text-xl text-Black leading-9 tracking-[0.05356rem] md:text-xl3 uppercase">
          in the box
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-[21px]">
            <span className="text-base text-Orange font-bold ">2x</span>
            <span className="text-base text-Black opacity-50">
              Speaker Unit
            </span>
          </li>
          <li className="flex gap-[21px]">
            <span className="text-base text-Orange font-bold ">2x</span>
            <span className="text-base text-Black opacity-50">
              Speaker Cloth Panel
            </span>
          </li>
          <li className="flex gap-[21px]">
            <span className="text-base text-Orange font-bold ">1x</span>
            <span className="text-base text-Black opacity-50">User Manual</span>
          </li>
          <li className="flex gap-[21px]">
            <span className="text-base text-Orange font-bold ">1x</span>
            <span className="text-base text-Black opacity-50">
              3.5mm 10m Audio Cable
            </span>
          </li>
          <li className="flex gap-[21px]">
            <span className="text-base text-Orange font-bold ">1x</span>
            <span className="text-base text-Black opacity-50">
              10m Optical Cable
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
