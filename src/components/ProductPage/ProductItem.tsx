import { getImageProps } from "next/image";
import Link from "next/link";

type ProductItemProsp = {
  order: number;
  title: string;
  description: string;
  imageSrc: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  isNew?: boolean;
  slug: string;
  category: string;
};

export default function ProductItem({
  order,
  title,
  description,
  imageSrc,
  isNew = false,
  slug,
  category,
}: ProductItemProsp) {
  const common = { alt: `A ${title}` };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    priority: order === 0,
    src: imageSrc.desktop,
    width: 700,
    height: 636,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    priority: order === 0,
    src: imageSrc.tablet,
    width: 446,
    height: 636,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    priority: order === 0,
    src: imageSrc.mobile,
    width: 654,
    height: 240,
  });
  return (
    <li className="flex flex-col lg:flex-row lg:even:flex-row-reverse gap-8 items-center md:gap-[52px] lg:gap-0 lg:justify-between">
      <picture className="">
        <source media="(min-width: 1020px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          className="w-full h-auto lg:w-[540px] lg:h-auto rounded-lg"
        />
      </picture>
      <div className=" md:w-[572px] lg:w-[445px] flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
        {isNew && <p className="text-sm text-Orange uppercase">NEW PRODUCT</p>}
        <h2 className="w-min text-xl2 md:text-xl4 text-Black tracking-[0.0625rem] md:-mt-2 uppercase">
          {title}
        </h2>
        <p className="text-base text-Black opacity-50 md:mt-2 lg:mb-4">
          {description}
        </p>
        <Link
          href={`/${category}/${slug}`}
          className={`px-[30px] py-[15px] bg-Orange hover:bg-LightOrange text-xs text-White font-bold border-none outline-none uppercase`}
        >
          See Product
        </Link>
      </div>
    </li>
  );
}
