import Image from "next/image";
import { formatter } from "@/util/formatter";

type ProductSummaryProps = {
  slug: string;
  title: string;
  price: number;
  quantity: number;
};

export default function ProductSummary({
  slug,
  title,
  price,
  quantity,
}: ProductSummaryProps) {
  return (
    <li className="flex gap-4 items-center">
      <Image
        src={`/cart/image-${slug}.jpg`}
        alt={title}
        className="w-[64px] h-[64px] rounded-lg"
        width={64}
        height={64}
      ></Image>
      <div className="w-full flex">
        <div>
          <h3 className="text-base text-Black font-bold">{title}</h3>
          <p className="text-sm text-Black leading-[1.5625rem] tracking-normal font-bold opacity-50">
            {formatter.format(price)}
          </p>
        </div>
        <p className="text-base text-Black font-bold opacity-50 ml-auto">
          x{quantity}
        </p>
      </div>
    </li>
  );
}
