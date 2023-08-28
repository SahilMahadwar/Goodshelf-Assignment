import { ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IProduct } from "types";

// Step 1: Define the context type
interface ICartContext {
  cartProducts: IProduct[];
  addProductToCart: ({ product }: { product: IProduct }) => void;
  removeProductFromCart: ({ _id }: { _id: string }) => void;
  cartValue: number;
}

export const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>(
    JSON.parse(localStorage.getItem("cartProducts") as string) || [],
  );

  const [cartValue, setCartValue] = useState<number>(
    cartProducts.reduce((total, price) => total + price.price, 0),
  );

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    setCartValue(cartProducts.reduce((total, price) => total + price.price, 0));
  }, [cartProducts]);

  const addProductToCart = ({ product }: { product: IProduct }) => {
    // Check if product already exists in cart
    const alreadyExists = cartProducts.filter(
      (item) => item._id === product._id,
    );

    if (alreadyExists.length > 0) {
      return toast.error(`${product.product_name} already exists in your cart`);
    }

    toast.success(`${product.product_name} added to your cart`);
    setCartProducts([...cartProducts, product]);
  };

  const removeProductFromCart = ({ _id }: { _id: string }) => {
    const updatedItems = cartProducts.filter((item) => item._id !== _id);

    setCartProducts(updatedItems);
  };

  const contextValue: ICartContext = {
    addProductToCart,
    removeProductFromCart,
    cartProducts,
    cartValue,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
