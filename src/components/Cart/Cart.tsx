import Button from "../UI/Button/Button";
import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className="w-[327px] px-[28px] py-6 flex flex-col gap-8">
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

      <div className="flex flex-col gap-4">
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
