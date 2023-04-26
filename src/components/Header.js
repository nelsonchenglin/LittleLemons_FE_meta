import React from "react";
import Logo from "../assets/Logo.svg";

function Header() {
  const handleClick = () => {
    return null;
  };

  return (
    <>
      <div id="nav-container">
        <div className="nav">
          <a href="/">
            <img src={Logo} alt="logo svg" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="/" onClick={handleClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" onClick={handleClick}>
                  About
                </a>
              </li>
              <li>
                <a href="/menu" onClick={handleClick}>
                  Menu
                </a>
              </li>
              <li>
                <a href="/reservations" onClick={handleClick}>
                  Reservations
                </a>
              </li>
              <li>
                <a href="/order" onClick={handleClick}>
                  Order Online
                </a>
              </li>
              <li>
                <a href="/login" onClick={handleClick}>
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
