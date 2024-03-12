import Image from "next/image";
import headphoneImage from "../../../public/shared/mobile/image-headphones-modal.png";
import speakerImage from "../../../public/shared/mobile/image-speakers-modal.png";
import earphoneImage from "../../../public/shared/mobile/image-earphones-modal.png";
import rightIcon from "../../../public/shared/desktop/icon-arrow-right.svg";
import Link from "../UI/Link/Link";

type NavDropdownProps = {
  isOpen: boolean;
  setIsOpen: (s: boolean) => void;
};

export default function NavDropdown({ isOpen, setIsOpen }: NavDropdownProps) {
  return (
    <div
      className={`before:w-full before:h-full ${
        isOpen ? "block" : "hidden"
      } before:opacity-50 before:fixed before:top-[90px] before:left-0 before:bottom-0 before:right-0 before:bg-Black lg:hidden before:z-9`}
    >
      <div
        className={`w-full px-6 md:px-10 py-8 md:py-14 absolute top-[90px] left-0  flex flex-col md:flex-row gap-4 md:gap-[10px] bg-White rounded-b-lg z-10`}
      >
        <div className="relative w-full h-[217px] flex flex-col justify-end">
          <div className="w-full h-[165px] pb-[22px] flex flex-col gap-[17px] justify-end items-center bg-VeryDarkWhite rounded-lg ">
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
            <Link href="#">
              <span>Shop</span>
              <Image src={rightIcon} alt=""></Image>
            </Link>
          </div>
        </div>
        <div className="relative w-full h-[217px] flex flex-col justify-end">
          <div className="w-full h-[165px] pb-[22px] flex flex-col gap-[17px] justify-end items-center bg-VeryDarkWhite rounded-lg ">
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
            <Link href="#">
              <span>Shop</span>
              <Image src={rightIcon} alt=""></Image>
            </Link>
          </div>
        </div>
        <div className="relative w-full h-[217px] flex flex-col justify-end">
          <div className="w-full h-[165px] pb-[22px] flex flex-col gap-[17px] justify-end items-center bg-VeryDarkWhite rounded-lg ">
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
            <Link href="#">
              <span>Shop</span>
              <Image src={rightIcon} alt=""></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
