import { getImageProps } from "next/image";
import ImageSpeakerMobile from "../../../public/home/mobile/image-speaker-zx9.png";
import ImageSpeakerTablet from "../../../public/home/tablet/image-speaker-zx9.png";
import ImageSpeakerDesktop from "../../../public/home/desktop/image-speaker-zx9.png";
import ImageEarphoneMobile from "../../../public/home/mobile/image-earphones-yx1.jpg";
import ImageEarphoneTablet from "../../../public/home/tablet/image-earphones-yx1.jpg";
import ImageEarphoneDesktop from "../../../public/home/desktop/image-earphones-yx1.jpg";
import Button from "@/components/UI/Button/Button";
import Link from "next/link";

export default function HomeMain() {
  const commonSpeaker = { alt: "A speaker" };
  const {
    props: { srcSet: desktopSpeaker },
  } = getImageProps({
    ...commonSpeaker,
    src: ImageSpeakerDesktop,
    width: 756,
    height: 918,
  });
  const {
    props: { srcSet: tabletSpeaker },
  } = getImageProps({
    ...commonSpeaker,
    src: ImageSpeakerTablet,
    width: 366,
    height: 444,
  });
  const {
    props: { srcSet: mobileSpeaker, ...restSpeaker },
  } = getImageProps({
    ...commonSpeaker,
    src: ImageSpeakerMobile,
    width: 320,
    height: 388,
  });

  const commonEarphone = { alt: "A speaker" };
  const {
    props: { srcSet: desktopEarphone },
  } = getImageProps({
    ...commonSpeaker,
    src: ImageEarphoneDesktop,
    width: 540,
    height: 320,
  });
  const {
    props: { srcSet: tabletEarphone },
  } = getImageProps({
    ...commonSpeaker,
    src: ImageEarphoneTablet,
    width: 678,
    height: 640,
  });
  const {
    props: { srcSet: mobileEarphone, ...restEarphone },
  } = getImageProps({
    ...commonSpeaker,
    src: ImageEarphoneMobile,
    width: 654,
    height: 400,
  });
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full max-w-[1110px] mx-auto h-[600px] md:h-[720px] lg:h-[560px] p-6 lg:p-0 flex flex-col lg:flex-row gap-8 md:gap-[64px] lg:gap-[138px] justify-center items-center  bg-Orange bg-[url('../../public/home/desktop/pattern-circles.svg')] bg-[center_bottom_125px] md:bg-[center_bottom_80px] lg:bg-[right_330px_top_-40px] bg-cover md:bg-auto bg-no-repeat rounded-lg lg:overflow-hidden">
        <picture className="lg:self-end lg:-mb-4 ">
          <source media="(min-width: 1020px)" srcSet={desktopSpeaker} />
          <source media="(min-width: 768px)" srcSet={tabletSpeaker} />
          <source media="(min-width: 500px)" srcSet={mobileSpeaker} />
          <img
            {...restSpeaker}
            className="w-[172px] h-[207px] md:w-[197px] md:h-[237px] lg:w-[410px] lg:h-[493px] "
          />
        </picture>
        <div className="w-[280px] md:w-[349px] flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
          <h2 className="text-[2.25rem] leading-[2.5rem] tracking-[0.08038rem] md:text-xl5 text-White font-bold uppercase ">
            ZX9 SPEAKER
          </h2>
          <p className="text-base text-White opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/speakers/zx9-speaker">
            <Button $type="3">See Product</Button>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[1110px] mx-auto h-[320px] px-6 md:px-[64] flex flex-col gap-8 justify-center items-start rounded-lg bg-[url('../../public/home/mobile/image-speaker-zx7.jpg')] md:bg-[url('../../public/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('../../public/home/desktop/image-speaker-zx7.jpg')] bg-center bg-cover bg-no-repeat">
        <h2 className="text-xl2 text-Black uppercase">ZX7 SPEAKER</h2>
        <Link href="/speakers/zx7-speaker">
          <Button $type="2">See Product</Button>
        </Link>
      </div>
      <div className="w-full max-w-[1110px] mx-auto flex flex-col md:flex-row gap-6 md:gap-[11px] lg:gap-[30px]">
        <picture className="">
          <source media="(min-width: 1020px)" srcSet={desktopEarphone} />
          <source media="(min-width: 768px)" srcSet={tabletEarphone} />
          <source media="(min-width: 500px)" srcSet={mobileEarphone} />
          <img
            {...restEarphone}
            className="min-w-[327px] min-h-[200px] md:w-[339px] md:h-[320px] lg:w-[540px] lg:h-[320px] rounded-lg"
          />
        </picture>
        <div className="w-full max-w-[540px] h-[200px] md:h-[320px] px-6 md:px-10 lg:px-[96px] flex flex-col gap-8 justify-center items-start bg-VeryDarkWhite rounded-lg">
          <h2 className="text-xl2 text-Black uppercase">YX1 EARPHONES</h2>
          <Link href="/earphones/yx1-earphones">
            <Button $type="2">See Product</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
