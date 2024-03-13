import Summary from "@/components/Summary";
import Button from "@/components/UI/Button/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <header className="h-[600px] md:h-[730px] flex justify-center items-center bg-LightBlack bg-[url('../../public/home/mobile/image-header.jpg')] md:bg-[url('../../public/home/tablet/image-header.jpg')] bg-bottom md:bg-center bg-cover bg-no-repeat">
        <div className="w-[315px] md:w-min flex flex-col items-center gap-6">
          <h1 className="flex flex-col gap-4">
            <span className="text-sm text-White text-center uppercase opacity-50">
              New Product
            </span>
            <span className="text-[2.25rem] md:text-xl5 text-White text-center leading-[2.5rem] tracking-[0.08038rem] uppercase font-bold">
              XX99 Mark II HeadphoneS
            </span>
          </h1>
          <p className="text-base text-White text-center opacity-75">
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
