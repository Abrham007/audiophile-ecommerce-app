import Image from "next/image";
import NumberInput from "../UI/Inputs/NumberInput";
import { formatter } from "@/util/formatter";
import { useState } from "react";

type CartItemProps = {
  title: string;
  price: number;
  quantity: number;
  slug: string;
  addItem?: any;
  removeItem?: any;
};

export default function CartItem({
  title,
  price,
  quantity,
  slug,
  addItem,
  removeItem,
}: CartItemProps) {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  function handleIncrement() {
    setCurrentQuantity((prevValue) => (prevValue += 1));
    addItem({ slug, title, price, quantity: 1 });
  }

  function handleDecrement() {
    setCurrentQuantity((prevValue) => (prevValue -= 1));
    removeItem({ slug, title, price, quantity: 1 });
  }

  return (
    <li className="flex gap-4 items-center">
      <Image
        src={`/cart/image-${slug}.jpg`}
        alt={title}
        className="w-[64px] h-[64px] rounded-lg"
        width={64}
        height={64}
      ></Image>
      <div className="w-full flex items-center justify-between">
        <div>
          <h3 className="text-base text-Black font-bold">{title}</h3>
          <p className="text-sm text-Black leading-[1.5625rem] tracking-normal font-bold opacity-50">
            {formatter.format(price)}
          </p>
        </div>
        <div className="w-[96px] h-[32px] ml-auto shrink-0">
          <NumberInput
            number={currentQuantity}
            increment={handleIncrement}
            decrement={handleDecrement}
          ></NumberInput>
        </div>
      </div>
    </li>
  );
}
