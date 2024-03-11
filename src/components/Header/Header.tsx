import NavBar from "./Navbar";
import cartIcon from "../../../public/cart/card-icon.svg";

export default function Header() {
  return (
    <header className="w-full h-[90px] px-6 bg-Black flex justify-between items-center ">
      <NavBar></NavBar>
      <h1 className="text-xl2 tracking-tight text-White">audiophile</h1>
      <button>
        <img src="./cart/cart-icon.svg" alt="cart icon" />
      </button>
    </header>
  );
}
