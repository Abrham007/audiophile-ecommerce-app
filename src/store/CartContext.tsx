import { createContext, useState } from "react";

type CartItemObject = {
  slug: string;
  title: string;
  price: number;
  quantity: number;
};

const CartContext = createContext({
  isCartOpen: false,
  openCartHandler: () => {},
  closeCartHandler: () => {},
  cartItems: [],
  addItem: (cartItem: CartItemObject) => {},
  removeItem: (cartItem: CartItemObject) => {},
});

type CartContextProviderProps = {
  children: any;
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [isCartOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function openCartHandler() {
    setIsOpen(true);
  }

  function closeCartHandler() {
    setIsOpen(false);
  }

  function addItem(cartItem: CartItemObject) {
    setCartItems((prevValue: any) => {
      const tempList = prevValue;
      const slugIndex = tempList.find(
        (item: CartItemObject) => item.slug === cartItem.slug
      );

      if (slugIndex > -1) {
        tempList[slugIndex].quantity += 1;
      } else {
        tempList.push(cartItem);
      }

      return tempList;
    });
  }

  function removeItem(cartItem: CartItemObject) {
    setCartItems((prevValue: any) => {
      let tempList = prevValue;
      const slugIndex = tempList.find(
        (item: CartItemObject) => item.slug === cartItem.slug
      );

      if (tempList[slugIndex].quantity === 1) {
        let newList = tempList.filter(
          (item: CartItemObject) => item.slug !== cartItem.slug
        );
        tempList = newList;
      } else {
        tempList[slugIndex].quantity -= 1;
      }

      return tempList;
    });
  }

  const cxtValue = {
    isCartOpen,
    openCartHandler,
    closeCartHandler,
    cartItems,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cxtValue}>{children}</CartContext.Provider>
  );
}

export default CartContext;
