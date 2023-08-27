import Logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="pb-4 pt-1 border-b">
      <img className="h-16" src={Logo} alt="Logo" />
    </nav>
  );
};
