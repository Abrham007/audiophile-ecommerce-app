import Button from "../UI/Button/Button";
import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className="w-[327px] md:w-[377px] md:absolute md:top-[114px] md:right-10 lg:right-0 px-[28px] py-6 md:p-8 flex flex-col gap-8 bg-White rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-lg text-Black uppercase">cart (3)</h2>
        <button className="text-base text-Black opacity-50 underline">
          Remove all
        </button>
      </div>

      <ul className="flex flex-col gap-6">
        <CartItem title="XX99 MK II"></CartItem>
        <CartItem title="XX59"></CartItem>
        <CartItem title="YX1"></CartItem>
      </ul>

      <div className="flex flex-col gap-6">
        <p className="flex justify-between">
          <span className="text-base text-Black opacity-50 uppercase">
            TOTAL
          </span>
          <span className="text-lg tracking-normal text-Black uppercase">
            $ 5,396
          </span>
        </p>
        <Button $type="1">checkout</Button>
      </div>
    </div>
  );
}
