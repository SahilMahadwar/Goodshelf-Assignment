import Logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="border-b bg-white pb-4 pt-1">
      <img className="h-16" src={Logo} alt="Logo" loading="eager" />
    </nav>
  );
};
