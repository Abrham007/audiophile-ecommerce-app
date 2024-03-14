import Image from "next/image";
import Link from "next/link";
import headphoneImage from "../../../public/shared/mobile/image-headphones-modal.png";
import speakerImage from "../../../public/shared/mobile/image-speakers-modal.png";
import earphoneImage from "../../../public/shared/mobile/image-earphones-modal.png";
import rightIcon from "../../../public/shared/desktop/icon-arrow-right.svg";

export default function Navbar() {
  return (
    <div
      className={`relative z-11 w-full px-6 md:px-10 py-8 md:py-14 bg-White flex flex-col md:flex-row gap-4 md:gap-[10px]  `}
    >
      <div className="relative w-full h-[217px] flex flex-col justify-end">
        <Link
          href="/headphone"
          className="w-full h-[165px] pb-[22px] flex flex-col gap-[17px] justify-end items-center bg-VeryDarkWhite rounded-lg "
        >
          <Image
            className="absolute top-0 left-[50% - 40px]"
            src={headphoneImage}
            alt="headphone"
            width={80}
            height={104}
          ></Image>
          <p className="text-base text-Black text-center uppercase tracking-[0.06694rem] leading-normal font-bold ">
            HEADPHONES
          </p>
          <p className="flex gap-[13px] items-center justify-center bg-transparent text-xs leading-normal text-[#00000050] hover:text-Orange uppercase border-none outline-none">
            <span>Shop</span>
            <Image src={rightIcon} alt=""></Image>
          </p>
        </Link>
      </div>
      <div className="relative w-full h-[217px] flex flex-col justify-end">
        <Link
          href="/speaker"
          className="w-full h-[165px] pb-[22px] flex flex-col gap-[17px] justify-end items-center bg-VeryDarkWhite rounded-lg "
        >
          <Image
            className="absolute top-0 left-[50% - 42px]"
            src={speakerImage}
            alt="speaker"
            width={84}
            height={101}
          ></Image>
          <p className="text-base text-Black text-center uppercase tracking-[0.06694rem] leading-normal font-bold ">
            SPEAKERS
          </p>
          <p className="flex gap-[13px] items-center justify-center bg-transparent text-xs leading-normal text-[#00000050] hover:text-Orange uppercase border-none outline-none">
            <span>Shop</span>
            <Image src={rightIcon} alt=""></Image>
          </p>
        </Link>
      </div>
      <div className="relative w-full h-[217px] flex flex-col justify-end">
        <Link
          href="./earphone"
          className="w-full h-[165px] pb-[22px] flex flex-col gap-[17px] justify-end items-center bg-VeryDarkWhite rounded-lg "
        >
          <Image
            className="absolute top-0 left-[50% - 50px]"
            src={earphoneImage}
            alt="earphone"
            width={103}
            height={104}
          ></Image>
          <p className="text-base text-Black text-center uppercase tracking-[0.06694rem] leading-normal font-bold ">
            EARPHONES
          </p>
          <p className="flex gap-[13px] items-center justify-center bg-transparent text-xs leading-normal text-[#00000050] hover:text-Orange uppercase border-none outline-none">
            <span>Shop</span>
            <Image src={rightIcon} alt=""></Image>
          </p>
        </Link>
      </div>
    </div>
  );
}
