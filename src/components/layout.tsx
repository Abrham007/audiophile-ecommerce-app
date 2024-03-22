import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CartContext, { CartContextProvider } from "@/store/CartContext";
import { useContext } from "react";
import Main from "./Main/Main";

export default function Layout({ children }: any) {
  return (
    <CartContextProvider>
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </CartContextProvider>
  );
}
