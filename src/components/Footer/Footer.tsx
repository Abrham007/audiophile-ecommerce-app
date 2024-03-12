import logoIcon from "../../../public/shared/desktop/logo.svg";
import Image from "next/image";
import LinkList from "../UI/Link/LinkList";
import FacebookIcon from "../UI/Icons/FacebookIcon";
import TwitterIcon from "../UI/Icons/TwitterIcon";
import InstgramIcon from "../UI/Icons/InstgramIcon";
export default function Footer() {
  return (
    <footer className=" bg-Black md:px-10">
      <div className="relative max-w-[1110px] h-[645px] md:h-[400px] lg:mx-auto flex flex-col gap-12 md:gap-8 lg:gap-9 items-center justify-center md:items-start px-6 md:px-10 lg:px-0">
        <div className="lg:w-full flex flex-col lg:flex-row gap-12 md:gap-8 items-center md:items-start lg:justify-between">
          <Image
            src={logoIcon}
            alt="audiophile"
            className="text-xl2 tracking-tight text-White"
          ></Image>
          <nav>
            <LinkList className="flex flex-col md:flex-row gap-4 text-center md:text-left"></LinkList>
          </nav>
        </div>

        <p className="max-w-[540px] text-base text-White opacity-50 text-center md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className="md:w-full flex flex-col md:flex-row gap-12 items-center md:justify-between md:mt-12 lg:mt-5">
          <p className="text-base text-White opacity-50 text-center">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex gap-4 items-center lg:absolute bottom-[136px] right-[165px]">
            <FacebookIcon></FacebookIcon>
            <TwitterIcon></TwitterIcon>
            <InstgramIcon></InstgramIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
