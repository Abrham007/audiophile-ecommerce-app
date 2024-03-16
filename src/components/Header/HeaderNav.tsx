import { useState } from "react";
import NavDropdown from "./NavDropdown";
import hamburgerIcon from "../../../public/shared/tablet/icon-hamburger.svg";
import Image from "next/image";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prevValue) => !prevValue);
  }
  return (
    <nav className="lg:hidden">
      <button
        onClick={toggleOpen}
        className="w-4 h-4 cursor-pointer border-none outline-none lg:hidden"
      >
        <Image src={hamburgerIcon} alt="hamburger icon"></Image>
      </button>
      <NavDropdown isOpen={isOpen} setIsOpen={setIsOpen}></NavDropdown>
    </nav>
  );
}
