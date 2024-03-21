import Modal from "./Modal";
import SuccessMessage from "./SuccessMessage";
import Cart from "./Cart/Cart";
import CartContext from "@/store/CartContext";
import { useContext } from "react";
import Header from "./Header/Header";

type MainProps = {
  children: any;
};

export default function Main({ children }: MainProps) {
  const { isCartOpen, closeCartHandler } = useContext(CartContext);
  return (
    <>
      <main>{children}</main>

      {false && (
        <Modal isOpen={false} setIsOpen={() => {}} className="rounded-lg">
          <SuccessMessage></SuccessMessage>
        </Modal>
      )}

      {isCartOpen && (
        <Modal
          isOpen={isCartOpen}
          setIsOpen={closeCartHandler}
          className=" rounded-lg"
        >
          <div className="w-full fixed  top-0 left-0 right-0">
            <Header></Header>
          </div>
          <div className="w-full max-w-[1110px] mx-auto md:fixed  md:top-0 md:left-0 md:right-0">
            <Cart></Cart>
          </div>
        </Modal>
      )}
    </>
  );
}
