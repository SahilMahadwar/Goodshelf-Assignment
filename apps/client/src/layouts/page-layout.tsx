import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const PageLayout = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col space-y-10 px-4 sm:px-6 lg:px-8 ">
      <header className="sticky top-0 z-40">
        <Navbar />
      </header>
      <div className="w-full flex-1">
        <Outlet />
      </div>
    </div>
  );
};
