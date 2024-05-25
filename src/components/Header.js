import Logo from "../../public/swiggy.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Swiggy Logo" className="logo" />
      <nav className="nav">
        <a href="" className="nav_link">
          Home
        </a>
        <a href="" className="nav_link">
          About
        </a>
        <a href="" className="nav_link">
          Cart
        </a>
      </nav>
    </header>
  );
};

export default Header;
