import Button from "../UI/Button/Button";
import { getImageProps } from "next/image";
import Link from "next/link";
type OthersItemProps = {
  title: string;
  slug: string;
  imageSrc: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
};
export default function OthersItem({ title, imageSrc, slug }: OthersItemProps) {
  const common = { alt: `A ${title}` };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: imageSrc.desktop,
    width: 1080,
    height: 1120,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    src: imageSrc.tablet,
    width: 562,
    height: 960,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: imageSrc.mobile,
    width: 654,
    height: 654,
  });

  let slugList = slug.split("-");
  let productCategory = slugList[slugList.length - 1];

  return (
    <li className="flex flex-col gap-8 md:gap-10 items-center">
      <picture>
        <source media="(min-width: 1020px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          className="w-[327px] h-[120px]  md:w-[223px] md:h-[318px] lg:w-[350px] lg:h-[318px] rounded-lg"
        />
      </picture>
      <div className="flex flex-col gap-8 items-center">
        <h3 className="text-xl">{title}</h3>
        <Link href={`/${productCategory}/${slug}`}>
          <Button $type="1">See Product</Button>
        </Link>
      </div>
    </li>
  );
}
