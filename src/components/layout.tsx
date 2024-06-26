import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CartContext, { CartContextProvider } from "@/store/CartContext";
import { useContext } from "react";
import Main from "./Main/Main";
import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
        <title>Audiophile E-Commerce App</title>
        <meta
          name="description"
          content="Abrham Araya portifolio project's made with Next, React and TypeScript hosted at Heroku"
        />
      </Head>
      <CartContextProvider>
        <Header></Header>
        <Main>{children}</Main>
        <Footer></Footer>
      </CartContextProvider>
    </>
  );
}
