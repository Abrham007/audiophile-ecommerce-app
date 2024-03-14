import Image, { getImageProps } from "next/image";
import ImageBestGearMobile from "../../public/shared/mobile/image-best-gear.jpg";
import ImageBestGearTablet from "../../public/shared/tablet/image-best-gear.jpg";
import ImageBestGearDesktop from "../../public/shared/desktop/image-best-gear.jpg";

export default function Summary() {
  const common = { alt: "A man wearing a headphone" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: ImageBestGearDesktop,
    width: 540,
    height: 588,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    src: ImageBestGearTablet,
    width: 1378,
    height: 600,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: ImageBestGearMobile,
    width: 654,
    height: 600,
  });
  return (
    <footer className="max-w-[1110px] mx-auto lg:w-full lg:h-[588px] flex flex-col lg:flex-row-reverse  gap-10 lg:gap-0 items-center  lg:justify-between ">
      <picture className="lg:w-[540px] lg:h-auto">
        <source media="(min-width: 1020px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img {...rest} className="w-full h-auto flex-shrink-0" />
      </picture>

      <div className="lg:w-[445px] lg:h-[295px] flex flex-col gap-8 text-center lg:text-left">
        <h2 className="text-xl2 md:text-xl4 text-Black  uppercase tracking-[0.0625rem]">
          Bringing you the <span className="text-Orange">best</span> audio gear
        </h2>
        <p className="text-base text-Black  opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </footer>
  );
}
