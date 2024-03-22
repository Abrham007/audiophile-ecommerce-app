import Button from "../UI/Button/Button";
import ProductSummary from "../ProductSummary";
import { useContext } from "react";
import CartContext from "@/store/CartContext";
import { formatter } from "@/util/formatter";

type ItemObject = {
  slug: string;
  title: string;
  price: number;
  quantity: number;
};

export default function CheckoutSummary() {
  const { cartItems, total } = useContext(CartContext);
  return (
    <div className="lg:w-[350px] px-6 py-8 md:p-8 flex flex-col gap-8 bg-White rounded-lg">
      <h2 className="text-lg text-Black uppercase">summary</h2>
      <ul className="flex flex-col gap-6">
        {cartItems.map((item: ItemObject) => (
          <ProductSummary key={item.slug} {...item}></ProductSummary>
        ))}
      </ul>
      <div className="flex flex-col gap-2">
        <p className="flex justify-between">
          <span className="text-base text-Black opacity-50 uppercase">
            TOTAL
          </span>
          <span className="text-lg tracking-normal text-Black uppercase">
            {formatter.format(total)}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-base text-Black opacity-50 uppercase">
            SHIPPING
          </span>
          <span className="text-lg tracking-normal text-Black uppercase">
            $ 50
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-base text-Black opacity-50 uppercase">
            VAT (INCLUDED)
          </span>
          <span className="text-lg tracking-normal text-Black uppercase">
            {formatter.format(total * 0.15)}
          </span>
        </p>
        <p className="flex justify-between mt-4">
          <span className="text-base text-Black opacity-50 uppercase">
            GRAND TOTAL
          </span>
          <span className="text-lg tracking-normal text-Orange uppercase">
            {formatter.format(total + 50)}
          </span>
        </p>
      </div>
      <Button $type="1">CONTINUE & PAY</Button>
    </div>
  );
}
