import { useEffect } from "react";
import "swiper/css";
import { register } from "swiper/element/bundle";
import { Router } from "./routes/routes";

export const App = () => {
  useEffect(() => {
    if (document.readyState === "complete") {
      register();
    }
    // register Swiper custom elements
  }, []);

  return <Router />;
};

export default App;
