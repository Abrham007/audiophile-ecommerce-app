import Image from "next/image";
import Button from "./UI/Button/Button";
import checkLogo from "../../public/checkout/icon-order-confirmation.svg";
import ImageHeadphone from "../../public/cart/image-xx99-mark-two-headphones.jpg";
import ProductSummary from "./ProductSummary";

export default function SuccessMessage() {
  return (
    <div className="md:w-[540px] flex flex-col gap-6 md:gap-8 p-8 md:p-12 bg-White rounded-lg">
      <Image
        src={checkLogo}
        alt="orange check mark"
        className="w-[64px] h[64px] rounded-full"
      ></Image>
      <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="text-xl text-Black leading-7 tracking-[0.05356rem] md:text-xl3 uppercase">
          THANK YOU FOR YOUR ORDER
        </h2>
        <p className="text-base text-Black opacity-50">
          You will receive an email confirmation shortly.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:mb-4">
        <div className="md:w-[246px] md:grow-1 p-6 bg-VeryDarkWhite rounded-t-lg md:rounded-none md:rounded-l-lg">
          <ul className="flex flex-col gap-4">
            <ProductSummary title="XX99 MK II"></ProductSummary>
          </ul>

          <button className=" w-full pt-[12px] border-t-2 border-t-solid border-t-[#00000008] text-center text-[0.75rem] text-Black  -tracking-[0.01338rem] font-bold opacity-50">
            and 2 other item(s)
          </button>
        </div>
        <div className="md:w-[198px] flex flex-col md:justify-end gap-2 px-6 pt-[15px] pb-[19px] md:py-10 bg-Black rounded-b-lg md:rounded-none md:rounded-r-lg">
          <h3 className="text-base text-White opacity-50">GRAND TOTAL</h3>
          <p className="text-lg text-White">$ 5,446</p>
        </div>
      </div>
      <Button $type="1">BACK TO HOME</Button>
    </div>
  );
}
