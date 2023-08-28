import { Route, Routes } from "react-router-dom";

import { PageLayout } from "../layouts/page-layout";
import { CartPage } from "../pages/cart";
import { HomePage } from "../pages/home";

export const Router = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>

      <Route path="/*" element={<div>404</div>} />
    </Routes>
  );
};
