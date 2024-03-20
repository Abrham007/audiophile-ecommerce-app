import HeaderNav from "./HeaderNav";
import cartIcon from "../../../public/shared/desktop/icon-cart.svg";
import logoIcon from "../../../public/shared/desktop/logo.svg";
import Image from "next/image";
import LinkList from "../UI/Link/LinkList";

export default function Header() {
  return (
    <header className="w-full h-[90px] bg-Black absolute z-10 top-0 left-0 lg:left-[50%] lg:-translate-x-[50%] md:px-10 lg:px-0">
      <div className="w-full max-w-[1110px] h-[90px] px-6 md:px-0 lg:px-0 lg:py-9 lg:mx-auto  flex md:gap-[42px] lg:gap-[197px] justify-between items-center border-b-[1px] border-b-solid border-b-[#FFFFFF50]">
        <HeaderNav></HeaderNav>

        <Image
          src={logoIcon}
          alt="audiophile"
          className="text-xl2 tracking-tight text-White"
        ></Image>

        <nav className="hidden lg:flex">
          <LinkList className="flex gap-[34px]"></LinkList>
        </nav>
        <button className="md:ml-auto">
          <Image src={cartIcon} alt="cart icon"></Image>
        </button>
      </div>
    </header>
  );
}
