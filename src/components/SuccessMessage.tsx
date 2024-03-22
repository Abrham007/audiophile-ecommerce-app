import Image from "next/image";
import Button from "./UI/Button/Button";
import checkLogo from "../../public/checkout/icon-order-confirmation.svg";
import ProductSummary from "./ProductSummary";
import { useContext, useState } from "react";
import CartContext from "@/store/CartContext";
import { formatter } from "@/util/formatter";
import Link from "next/link";

type ItemObject = {
  slug: string;
  title: string;
  price: number;
  quantity: number;
};

type contextOutput = {
  cartItems: any;
  total: number;
  removeAllItems: () => void;
};

export default function SuccessMessage() {
  const { cartItems, total, removeAllItems }: contextOutput =
    useContext(CartContext);
  const [showAll, setShowAll] = useState(false);

  function toggleShowAll() {
    setShowAll((prevValue) => !prevValue);
  }
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
            {showAll ? (
              cartItems.map((item: ItemObject) => (
                <ProductSummary key={item.slug} {...item}></ProductSummary>
              ))
            ) : (
              <ProductSummary {...cartItems[0]}></ProductSummary>
            )}
          </ul>

          {cartItems.length > 1 && (
            <button
              onClick={toggleShowAll}
              className=" w-full pt-[12px] border-t-2 border-t-solid border-t-[#00000008] text-center text-[0.75rem] text-Black  -tracking-[0.01338rem] font-bold opacity-50"
            >
              and {cartItems.length - 1} other item(s)
            </button>
          )}
        </div>
        <div className="md:w-[198px] flex flex-col md:justify-end gap-2 px-6 pt-[15px] pb-[19px] md:py-10 bg-Black rounded-b-lg md:rounded-none md:rounded-r-lg">
          <h3 className="text-base text-White opacity-50">GRAND TOTAL</h3>
          <p className="text-lg text-White">{formatter.format(total + 50)}</p>
        </div>
      </div>
      <Link href="/">
        <Button $type="1" className="w-full" onClick={removeAllItems}>
          BACK TO HOME
        </Button>
      </Link>
    </div>
  );
}
