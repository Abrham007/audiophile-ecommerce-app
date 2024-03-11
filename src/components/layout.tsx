import { Manrope } from "next/font/google";
import Header from "./Header/Header";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function Layout({ children }: any) {
  return (
    <>
      <Header></Header>
      <main className={`${manrope.variable}`}>{children}</main>
    </>
  );
}
