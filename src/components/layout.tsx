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
          name="decription"
          content="This one of the project's of Abrham Araya made by Next, React and TypeScript hosted at Heroku"
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
