import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaLinkedinIn } from "react-icons/fa";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav1">
        <img src="/Images/10002.png" alt="" />
      </div>
      <div className="nav2">
        <ul>
          {/* <li><a href="/">SPS</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/service">Services</a></li>
                <li><a href="/contact">Contact</a></li> */}
          <nav className="nnn">
            <Link className="lii" to="/">Home</Link>
            <Link className="lii" to="/about">About</Link>
            <Link className="lii" to="/contact">Contact</Link>
            <Link className="lii" to="/service">Services</Link>
          </nav>
          <li id="last-five">
            <a href="">
              <FaLinkedinIn id="icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
