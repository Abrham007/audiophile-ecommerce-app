import { useContext } from "react";
import Button from "../UI/Button/Button";
import CartItem from "./CartItem";
import CartContext from "@/store/CartContext";
import { formatter } from "@/util/formatter";
import Link from "next/link";
import { useRouter } from "next/router";

type ItemObject = {
  slug: string;
  title: string;
  price: number;
  quantity: number;
};

export default function Cart() {
  const {
    cartItems,
    addItem,
    removeItem,
    total,
    removeAllItems,
    closeCartHandler,
  } = useContext(CartContext);

  const router = useRouter();

  function handleCheckout() {
    router.push("/checkout");
    closeCartHandler();
  }

  return (
    <div className="w-[327px] md:w-[377px] md:absolute md:top-[114px] md:right-10 lg:right-0 px-[28px] py-6 md:p-8 flex flex-col gap-8 bg-White rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-lg text-Black uppercase">
          cart ({cartItems.length})
        </h2>
        <button
          onClick={removeAllItems}
          className="text-base text-Black hover:text-Orange opacity-50 underline"
        >
          Remove all
        </button>
      </div>

      <ul className="flex flex-col gap-6">
        {cartItems.map((item: ItemObject) => (
          <CartItem
            key={item.slug}
            {...item}
            quantity={item.quantity}
            addItem={addItem}
            removeItem={removeItem}
          ></CartItem>
        ))}
      </ul>

      <div className="flex flex-col gap-6">
        <p className="flex justify-between">
          <span className="text-base text-Black opacity-50 uppercase">
            TOTAL
          </span>
          <span className="text-lg tracking-normal text-Black uppercase">
            {formatter.format(total)}
          </span>
        </p>
        <div className="flex flex-col gap-2">
          <Link
            href="/checkout"
            className="w-full px-[30px] py-[15px] bg-Orange hover:bg-LightOrange text-xs text-White text-center font-bold border-none outline-none uppercase"
            onClick={handleCheckout}
          >
            checkout
          </Link>
          <Button $type="1" className="w-full" onClick={closeCartHandler}>
            close
          </Button>
        </div>
      </div>
    </div>
  );
}
