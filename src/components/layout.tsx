import { Manrope } from "next/font/google";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function Layout({ children }: any) {
  return (
    <>
      <Header></Header>
      <main className={`${manrope.variable}`}>{children}</main>
      <Footer></Footer>
    </>
  );
}
