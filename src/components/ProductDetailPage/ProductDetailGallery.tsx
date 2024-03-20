import { getImageProps } from "next/image";

type ProductDetailGaller = {
  gallery: {
    first: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
    second: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
    third: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };
};

export default function ProductDetailGallery({ gallery }: ProductDetailGaller) {
  const common = { alt: `` };
  const {
    props: { srcSet: desktopFirst },
  } = getImageProps({
    ...common,
    src: gallery.first.desktop,
    width: 445,
    height: 280,
  });
  const {
    props: { srcSet: tabletFirst },
  } = getImageProps({
    ...common,
    src: gallery.first.tablet,
    width: 554,
    height: 348,
  });
  const {
    props: { srcSet: mobileFirst, ...restFirst },
  } = getImageProps({
    ...common,
    src: gallery.first.mobile,
    width: 654,
    height: 348,
  });

  const {
    props: { srcSet: desktopSecond },
  } = getImageProps({
    ...common,
    src: gallery.second.desktop,
    width: 445,
    height: 280,
  });
  const {
    props: { srcSet: tabletSecond },
  } = getImageProps({
    ...common,
    src: gallery.second.tablet,
    width: 554,
    height: 348,
  });
  const {
    props: { srcSet: mobileSecond, ...restSecond },
  } = getImageProps({
    ...common,
    src: gallery.second.mobile,
    width: 654,
    height: 348,
  });

  const {
    props: { srcSet: desktopThird },
  } = getImageProps({
    ...common,
    src: gallery.third.desktop,
    width: 635,
    height: 592,
  });
  const {
    props: { srcSet: tabletThird },
  } = getImageProps({
    ...common,
    src: gallery.third.tablet,
    width: 790,
    height: 736,
  });
  const {
    props: { srcSet: mobileThird, ...restThird },
  } = getImageProps({
    ...common,
    src: gallery.third.mobile,
    width: 654,
    height: 736,
  });
  return (
    <div className="flex flex-col md:flex-row gap-5 mx-auto">
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
