import Image, { StaticImageData, getImageProps } from "next/image";
import ImageFirstMobile from "../../../public/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import ImageFirstTablet from "../../../public/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import ImageFirstDesktop from "../../../public/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";

import ImageSecondMobile from "../../../public/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import ImageSecondTablet from "../../../public/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import ImageSecondDesktop from "../../../public/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";

import ImageThirdMobile from "../../../public/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";
import ImageThirdTablet from "../../../public/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";
import ImageThirdDesktop from "../../../public/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

export default function ProductDetailGallery() {
  const common = { alt: `` };
  const {
    props: { srcSet: desktopFirst },
  } = getImageProps({
    ...common,
    src: ImageFirstDesktop,
    width: 445,
    height: 280,
  });
  const {
    props: { srcSet: tabletFirst },
  } = getImageProps({
    ...common,
    src: ImageFirstTablet,
    width: 554,
    height: 348,
  });
  const {
    props: { srcSet: mobileFirst, ...restFirst },
  } = getImageProps({
    ...common,
    src: ImageFirstMobile,
    width: 654,
    height: 348,
  });

  const {
    props: { srcSet: desktopSecond },
  } = getImageProps({
    ...common,
    src: ImageSecondDesktop,
    width: 445,
    height: 280,
  });
  const {
    props: { srcSet: tabletSecond },
  } = getImageProps({
    ...common,
    src: ImageSecondTablet,
    width: 554,
    height: 348,
  });
  const {
    props: { srcSet: mobileSecond, ...restSecond },
  } = getImageProps({
    ...common,
    src: ImageSecondMobile,
    width: 654,
    height: 348,
  });

  const {
    props: { srcSet: desktopThird },
  } = getImageProps({
    ...common,
    src: ImageThirdDesktop,
    width: 635,
    height: 592,
  });
  const {
    props: { srcSet: tabletThird },
  } = getImageProps({
    ...common,
    src: ImageThirdTablet,
    width: 790,
    height: 736,
  });
  const {
    props: { srcSet: mobileThird, ...restThird },
  } = getImageProps({
    ...common,
    src: ImageThirdMobile,
    width: 654,
    height: 736,
  });
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <picture>
          <source media="(min-width: 1020px)" srcSet={desktopFirst} />
          <source media="(min-width: 768px)" srcSet={tabletFirst} />
          <source media="(min-width: 500px)" srcSet={mobileFirst} />
          <img
            {...restFirst}
            className="w-[327px] h-[174px] md:w-[277px] md:h-[174px] lg:w-[445px] lg:h-[280px] rounded-lg"
          />
        </picture>
        <picture>
          <source media="(min-width: 1020px)" srcSet={desktopSecond} />
          <source media="(min-width: 768px)" srcSet={tabletSecond} />
          <source media="(min-width: 500px)" srcSet={mobileSecond} />
          <img
            {...restSecond}
            className="w-[327px] h-[174px] md:w-[277px] md:h-[174px] lg:w-[445px] lg:h-[280px] rounded-lg"
          />
        </picture>
      </div>

      <picture>
        <source media="(min-width: 1020px)" srcSet={desktopThird} />
        <source media="(min-width: 768px)" srcSet={tabletThird} />
        <source media="(min-width: 500px)" srcSet={mobileThird} />
        <img
          {...restThird}
          className="w-[327px] h-[368px] md:w-[395px] md:h-[368px] lg:w-[635px] lg:h-[592px] rounded-lg"
        />
      </picture>
    </div>
  );
}
