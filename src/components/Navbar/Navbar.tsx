import Image from "next/image";
import Link from "next/link";
import headphoneImage from "../../../public/shared/mobile/image-headphones-modal.png";
import speakerImage from "../../../public/shared/mobile/image-speakers-modal.png";
import earphoneImage from "../../../public/shared/mobile/image-earphones-modal.png";
import rightIcon from "../../../public/shared/desktop/icon-arrow-right.svg";

type NavBarProps = {
  className?: string;
};

export default function Navbar({ className }: NavBarProps) {
  return (
    <div
      className={`relative z-11 w-full max-w-[1110px] mx-auto  py-8 md:py-14 lg:py-0 bg-White flex flex-col md:flex-row gap-4 md:gap-[10px] lg:gap-[30px] ${className}`}
    >
      <div className="relative w-full h-[217px] flex flex-col justify-end">
        <Link
          href="/headphones"
          className="w-full h-[165px] pb-[22px] flex flex-col gap-[17px] justify-end items-center bg-VeryDarkWhite rounded-lg "
        >
          <Image
            className="absolute top-0 left-[50% - 40px] w-[80px] h-auto"
            src={headphoneImage}
            alt="headphone"
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
          href="/speakers"
          className="w-full h-[165px] pb-[22px] flex flex-col gap-[17px] justify-end items-center bg-VeryDarkWhite rounded-lg "
        >
          <Image
            className="absolute top-0 left-[50% - 42px] w-[80px] h-auto"
            src={speakerImage}
            alt="speaker"
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
          href="./earphones"
          className="w-full h-[165px] pb-[22px] flex flex-col gap-[17px] justify-end items-center bg-VeryDarkWhite rounded-lg "
        >
          <Image
            className="absolute top-0 left-[50% - 50px] w-[103px] h-auto"
            src={earphoneImage}
            alt="earphone"
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
