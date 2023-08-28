import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import useCart from "../hooks/use-cart";
export const Navbar = () => {
  const { cartProducts } = useCart();

  return (
    <nav className="flex justify-between border-b bg-white pb-4 pt-1">
      <Link to="/">
        <img className="h-16" src={Logo} alt="Logo" loading="eager" />
      </Link>
      <Link to="/cart">
        <div className="relative mt-7 inline-block">
          {cartProducts.length > 0 && (
            <span className="1 absolute -right-2 -top-2 z-10 inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-sm text-white">
              {cartProducts.length}
            </span>
          )}
          <ShoppingBag className="h-6 w-6 text-gray-800" />{" "}
        </div>
      </Link>
    </nav>
  );
};
