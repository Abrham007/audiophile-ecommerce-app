import { getImageProps } from "next/image";
import Button from "../UI/Button/Button";
import NumberInput from "../UI/Inputs/NumberInput";
import { formatter } from "../../util/formatter.js";
import { useContext, useState } from "react";
import CartContext from "@/store/CartContext";

type ProductItemProsp = {
  slug: string;
  title: string;
  description: string;
  imageSrc: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  isNew: boolean;
  price: number;
};

export default function ProductDetailItem({
  slug,
  title,
  description,
  imageSrc,
  isNew,
  price,
}: ProductItemProsp) {
  const common = { alt: `A ${title}` };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    priority: true,
    src: imageSrc.desktop,
    width: 1080,
    height: 1120,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    priority: true,
    src: imageSrc.tablet,
    width: 562,
    height: 960,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    priority: true,
    src: imageSrc.mobile,
    width: 654,
    height: 654,
  });

  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  function handleAddCartItem() {
    let cartItemObject = {
      slug,
      title,
      price,
      quantity,
    };

    addItem(cartItemObject);
    setQuantity(1);
  }

  function handleIncrement() {
    setQuantity((prevValue) => (prevValue += 1));
  }

  function handleDecrement() {
    setQuantity((prevValue) => {
      if (prevValue === 1) {
        return 1;
      } else {
        return (prevValue -= 1);
      }
    });
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-[69.5px] lg:gap-[125px]">
      <picture>
        <source media="(min-width: 1020px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          className="w-[327px] h-[327px] mx-auto md:w-[281px] md:h-[480px] lg:w-[540px] lg:h-[560px] rounded-lg"
        />
      </picture>
      <div className="w-[327px] md:w-[339.5] lg:w-[445.5px] mx-auto flex flex-col gap-6 md:gap-8 md:self-center">
        {isNew && (
          <p className="text-sm text-Orange uppercase md:-mb-4">NEW PRODUCT</p>
        )}
        <h2 className="text-xl2 md:text-xl4 text-Black tracking-[0.0625rem] uppercase">
          {title}
        </h2>
        <p className="text-base text-Black opacity-50">{description}</p>
        <p className="text-lg text-Black uppercase">
          {formatter.format(price)}
        </p>
        <div className="flex gap-4 items-center mt-2 md:mt-0 lg:mt-4">
          <div className="w-[120px] h-[48px]">
            <NumberInput
              number={quantity}
              decrement={handleDecrement}
              increment={handleIncrement}
            ></NumberInput>
          </div>

          <Button $type="1" onClick={handleAddCartItem}>
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
}
