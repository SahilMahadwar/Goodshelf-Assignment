import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const PageLayout = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col space-y-10 px-8 sm:px-8 lg:px-8 ">
      <header className="sticky top-0 z-40">
        <Navbar />
      </header>
      <div className="w-full flex-1 space-y-10">
        <Outlet />
      </div>
    </div>
  );
};
