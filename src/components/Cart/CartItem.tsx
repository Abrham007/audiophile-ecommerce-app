import Image from "next/image";
import NumberInput from "../UI/Inputs/NumberInput";
import { formatter } from "@/util/formatter";

type CartItemProps = {
  title: string;
  price: number;
  quantity: number;
  slug: string;
};

export default function CartItem({
  title,
  price,
  quantity,
  slug,
}: CartItemProps) {
  return (
    <li className="flex gap-4 items-center">
      <Image
        src={`/cart/image-${slug}.jpg`}
        alt={title}
        className="w-[64px] h-[64px] rounded-lg"
      ></Image>
      <div className="w-full flex items-center justify-between">
        <div>
          <h3 className="text-base text-Black font-bold">{title}</h3>
          <p className="text-sm text-Black leading-[1.5625rem] tracking-normal font-bold opacity-50">
            {formatter.format(price)}
          </p>
        </div>
        <div className="w-[96px] h-[32px] ml-auto">
          <NumberInput
            number={quantity}
            increment={() => {}}
            decrement={() => {}}
          ></NumberInput>
        </div>
      </div>
    </li>
  );
}
