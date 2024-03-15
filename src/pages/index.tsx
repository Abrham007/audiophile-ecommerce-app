import Summary from "@/components/Summary";
import NavLinks from "@/components/Navbar/Navbar";
import HomeHeader from "@/components/HomePage/HomeHeader";
import HomeMain from "@/components/HomePage/HomeMain";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HomeHeader></HomeHeader>
      <section className="flex flex-col gap-[120px] px-6 md:px-10 lg:px-0 mt-10 mb-[120px] md:my-[96px] lg:mt-[120px] lg:mb-[200px]">
        <NavLinks></NavLinks>
        <HomeMain></HomeMain>
        <Summary></Summary>
      </section>
    </div>
  );
}
