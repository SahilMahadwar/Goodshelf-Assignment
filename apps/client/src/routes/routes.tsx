import { Route, Routes } from "react-router-dom";

import { PageLayout } from "../layouts/page-layout";
import { HomePage } from "../pages/home";

export const Router = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="/*" element={<div>404</div>} />
    </Routes>
  );
};
