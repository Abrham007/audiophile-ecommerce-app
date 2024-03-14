import Summary from "@/components/Summary";
import Button from "@/components/UI/Button/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <header className="h-[600px] md:h-[730px] flex justify-center items-center bg-Black bg-[url('../../public/home/mobile/image-header.jpg')] md:bg-[url('../../public/home/tablet/image-header.jpg')] lg:bg-[url('../../public/home/desktop/image-hero.jpg')] bg-bottom md:bg-center bg-cover bg-no-repeat">
        <div className="w-[315px] md:w-min lg:w-[1110px] flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
          <h1 className="lg:w-[395px] flex flex-col gap-4 md:gap-6">
            <span className="text-sm text-White  uppercase opacity-50">
              New Product
            </span>
            <span className="text-[2.25rem] md:text-xl5 text-White leading-[2.5rem] tracking-[0.08038rem] uppercase font-bold">
              XX99 Mark II HeadphoneS
            </span>
          </h1>
          <p className="lg:w-[350px] text-base text-White opacity-75 lg:mb-4">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button $type="1">See Product</Button>
        </div>
      </header>
      <section className="flex px-6 md:px-10 lg:px-0 mt-10 mb-[120px] md:my-[96px] lg:mt-[120px] lg:mb-[200px]">
        <Summary></Summary>
      </section>
    </div>
  );
}
