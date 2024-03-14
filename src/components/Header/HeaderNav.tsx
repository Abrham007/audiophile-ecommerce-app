import { useState } from "react";
import NavDropdown from "./NavDropdown";

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
        <img src="./shared/tablet/icon-hamburger.svg" alt="hamberger icon" />
      </button>
      <NavDropdown isOpen={isOpen} setIsOpen={setIsOpen}></NavDropdown>
    </nav>
  );
}
