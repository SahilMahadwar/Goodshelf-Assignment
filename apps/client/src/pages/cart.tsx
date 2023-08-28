import { ShoppingBasket, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { CartFooter } from "../components/cart-footer";
import { ProductCard } from "../components/product-card";
import useCart from "../hooks/use-cart";

export const CartPage = () => {
  const { cartProducts, removeProductFromCart, cartValue } = useCart();

  return (
    <div className="flex min-h-[80vh] flex-col space-y-14">
      <div className="flex-1">
        {cartProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {cartProducts.map((product) => {
              return (
                <ProductCard
                  key={product._id}
                  image={
                    <ProductCard.Image imageUrl={product.product_images[0]} />
                  }
                  action={
                    <button
                      onClick={() =>
                        removeProductFromCart({ _id: product._id })
                      }
                    >
                      <Trash2 className="h-6 w-6 text-rose-400 hover:text-rose-500" />
                    </button>
                  }
                  name={product.product_name}
                  oneLiner={product.one_liner}
                  price={product.price}
                  quantity={product.quantity}
                />
              );
            })}
          </div>
        ) : (
          <div className="mt-14 flex flex-col  items-center space-y-4">
            <ShoppingBasket className="h-24 w-24 text-rose-500" />
            <h2 className="text-lg font-medium">Your Cart Is Empty!</h2>

            <Link
              to={"/"}
              className="rounded-lg bg-rose-500 px-4 py-2 text-sm text-white"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>

      {cartValue > 0 && <CartFooter />}
    </div>
  );
};
