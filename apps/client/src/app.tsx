import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "swiper/css";
import { register } from "swiper/element/bundle";
import { Router } from "./routes/routes";

import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./contexts/cart-context";

export const App = () => {
  useEffect(() => {
    if (document.readyState === "complete") {
      register();
    }
    // register Swiper custom elements
  }, []);

  return (
    <>
      <CartProvider>
        <Router />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
        />
      </CartProvider>
    </>
  );
};

export default App;
