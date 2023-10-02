import React, { useState } from "react";
import Logo from "../../assets/paw logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <img src={Logo} alt="Paw Logo" width={30} height={30} />
      <div className="menu-icon" onClick={handleClick}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <a href="/" className="nav-links">
          About
        </a>
        <a href="/" className="nav-links">
          Tricks
        </a>
        <a href="/" className="nav-links">
          Gallery
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
