import { toast } from "react-toastify";
import useCart from "../hooks/use-cart";

export const CartFooter = () => {
  const { cartValue } = useCart();

  return (
    <div className="flex items-center justify-between border-t px-6 py-4">
      <h3 className="text-xl">
        Total Cart Value: <span className="font-medium">₹{cartValue}</span>
      </h3>
      <button
        onClick={() => toast.info(`Dummy button doesn't do anything`)}
        className="rounded-lg bg-rose-500 px-4 py-3 text-white"
      >
        Check Out
      </button>
    </div>
  );
};
