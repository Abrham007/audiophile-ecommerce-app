import Navbar from "../Navbar/Navbar";

type NavDropdownProps = {
  isOpen: boolean;
  setIsOpen: (s: boolean) => void;
};

export default function NavDropdown({ isOpen, setIsOpen }: NavDropdownProps) {
  return (
    <div
      className={`absolute top-[90px] left-0 right-0 bg-White rounded-b-lg z-10 before:w-full before:h-full ${
        isOpen ? "block" : "hidden"
      } before:opacity-50 before:fixed before:top-[90px] before:left-0 before:bottom-0 before:right-0 before:bg-Black lg:hidden before:z-9`}
    >
      <Navbar></Navbar>
    </div>
  );
}
