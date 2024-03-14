import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
