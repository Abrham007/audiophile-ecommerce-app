import Image, { StaticImageData, getImageProps } from "next/image";
import Button from "../UI/Button/Button";
import ImageHeadphoneMobile from "../../../public/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import ImageHeadphoneTablet from "../../../public/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import ImageHeadphoneDesktop from "../../../public/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import NumberInput from "../UI/Inputs/NumberInput";

type ProductItemProsp = {
  title: string;
  description: string;
  imgSrc?: StaticImageData;
  isNew?: boolean;
};

export default function ProductDetailItem({
  title,
  description,
  imgSrc,
  isNew = true,
}: ProductItemProsp) {
  const common = { alt: `A ${title}` };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: ImageHeadphoneDesktop,
    width: 1080,
    height: 1120,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    src: ImageHeadphoneTablet,
    width: 562,
    height: 960,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: ImageHeadphoneMobile,
    width: 654,
    height: 654,
  });
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-[69.5px] lg:gap-[125px]">
      <picture>
        <source media="(min-width: 1020px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          className="w-[327px] h-[327px] mx-auto md:w-[281px] md:h-[480px] lg:w-[540px] lg:h-[560px] rounded-lg"
        />
      </picture>
      <div className="w-[327px] md:w-[339.5] lg:w-[445.5px] mx-auto flex flex-col gap-6 md:gap-8 md:self-center">
        {isNew && (
          <p className="text-sm text-Orange uppercase md:-mb-4">NEW PRODUCT</p>
        )}
        <h2 className="text-xl2 md:text-xl4 text-Black tracking-[0.0625rem]">
          {title}
        </h2>
        <p className="text-base text-Black opacity-50">{description}</p>
        <p className="text-lg text-Black uppercase">$ 2,999</p>
        <div className="flex gap-4 items-center mt-2 md:mt-0 lg:mt-4">
          <NumberInput
            number={1}
            decrement={() => {}}
            increment={() => {}}
          ></NumberInput>
          <Button $type="1">ADD TO CART</Button>
        </div>
      </div>
    </div>
  );
}
