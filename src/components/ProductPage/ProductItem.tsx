import Image, { StaticImageData, getImageProps } from "next/image";
import Button from "../UI/Button/Button";
import ImageHeadphoneMobile from "../../../public/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import ImageHeadphoneTablet from "../../../public/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import ImageHeadphoneDesktop from "../../../public/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

type ProductItemProsp = {
  title: string;
  description: string;
  imgSrc?: StaticImageData;
  isNew?: boolean;
};

export default function ProductItem({
  title,
  description,
  imgSrc,
  isNew = false,
}: ProductItemProsp) {
  const common = { alt: `A ${title}` };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: ImageHeadphoneDesktop,
    width: 700,
    height: 636,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    src: ImageHeadphoneTablet,
    width: 446,
    height: 636,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: ImageHeadphoneMobile,
    width: 654,
    height: 240,
  });
  return (
    <li className="flex flex-col lg:flex-row gap-8 items-center md:gap-[52px] lg:gap-0 lg:justify-between">
      <picture className="lg:self-end lg:-mb-4 ">
        <source media="(min-width: 1020px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          className="w-full h-[352px] md:h-[352px] lg:w-[540px] lg:h-[560px]"
        />
      </picture>
      <div className=" md:w-[572px] lg:w-[445px] flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
        {isNew && <p className="text-sm text-Orange uppercase">NEW PRODUCT</p>}
        <h2 className="text-xl2 md:text-xl4 text-Black tracking-[0.0625rem] md:-mt-2">
          {title}
        </h2>
        <p className="text-base text-Black opacity-50 md:mt-2 lg:mb-4">
          {description}
        </p>
        <Button $type="1">See Product</Button>
      </div>
    </li>
  );
}
