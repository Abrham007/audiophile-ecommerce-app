import NavBar from "./Navbar";
import cartIcon from "../../../public/shared/desktop/icon-cart.svg";
import logoIcon from "../../../public/shared/desktop/logo.svg";
import Image from "next/image";
import LinkList from "../UI/Link/LinkList";

export default function Header() {
  return (
    <header className="bg-Black md:px-10">
      <div className="w-full max-w-[1110px] h-[90px] px-6 md:px-0 lg:px-0 lg:py-9 lg:mx-auto  flex md:gap-[42px] lg:gap-[197px] justify-between items-center border-b-[1px] border-b-solid border-b-White">
        <NavBar></NavBar>

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
