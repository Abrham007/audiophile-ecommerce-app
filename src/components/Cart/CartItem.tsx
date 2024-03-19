import Image from "next/image";
import ImageHeadphone from "../../../public/cart/image-xx99-mark-two-headphones.jpg";
import NumberInput from "../UI/Inputs/NumberInput";

type CartItemProps = {
  title: string;
};

export default function CartItem({ title }: CartItemProps) {
  return (
    <li className="flex gap-4 items-center">
      <Image
        src={ImageHeadphone}
        alt={title}
        className="w-[64px] h-[64px] rounded-lg"
      ></Image>
      <div className="w-full flex items-center justify-between">
        <div>
          <h3 className="text-base text-Black font-bold">{title}</h3>
          <p className="text-sm text-Black leading-[1.5625rem] tracking-normal font-bold opacity-50">
            $ 2,999
          </p>
        </div>
        <NumberInput
          number={1}
          increment={() => {}}
          decrement={() => {}}
          className="w-[96px] h-[40px] ml-auto"
        ></NumberInput>
      </div>
    </li>
  );
}
