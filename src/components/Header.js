import React, { useState } from "react";
import Logo from "../../public/swiggy.svg";

const Header = () => {
  const [authBtn, setAuthBtn] = useState("Login");

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
      <button
        className="button"
        onClick={() =>
          authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login")
        }
      >
        {authBtn}
      </button>
    </header>
  );
};

export default Header;
