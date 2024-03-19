import Image from "next/image";
import ImageHeadphone from "../../public/cart/image-xx99-mark-two-headphones.jpg";

type SummaryItemProps = {
  title: string;
};

export default function SummaryItem({ title }: SummaryItemProps) {
  return (
    <li className="flex gap-4 items-center">
      <Image
        src={ImageHeadphone}
        alt={title}
        className="w-[64px] h-[64px] rounded-lg"
      ></Image>
      <div className="w-full flex">
        <div>
          <h3 className="text-base text-Black font-bold">{title}</h3>
          <p className="text-sm text-Black leading-[1.5625rem] tracking-normal font-bold opacity-50">
            $ 2,999
          </p>
        </div>
        <p className="text-base text-Black font-bold opacity-50 ml-auto">x1</p>
      </div>
    </li>
  );
}
