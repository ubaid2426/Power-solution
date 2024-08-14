// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn icon
import Button from '../Button/Button';
// import { Linkedin } from '@dcp-ui/icons.linkedin'
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
        <div className="footer">
          <div className="foo-1">
            <div className="foo1">
              <img src="/Images/10018.png" alt="logo footer" />
            </div>
            <div className="foo2">
              <ul>
                {/* <li><a href="/">SPS</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/service">Services</a></li>
                <li><a href="/contact">Contact</a></li> */}
                   <nav className="nnn1">
            <Link className="lii1" to="/">Home</Link>
            <Link className="lii1" to="/about">About</Link>
            <Link className="lii1" to="/service">Services</Link>
            <Link className="lii1" to="/contact">Contact</Link>
          </nav>
              </ul>
            </div>
            <div className="foo3">
              <div className="foo3-1"><span>Get in Touch Today!</span></div>
              <div className="foo3-2">
              <Button
                btnText="Contact Us"
                height="60px"
                width="200px"
                onClick={() => alert("Button clicked!")}
              />
                </div>
              <div className="foo3-3"> <a href=""><FaLinkedinIn /></a>
             
              </div>
            </div>
          </div>
          <div className="foo-2"><span>
          © 2023 by Smarter Power Solutions Pty Ltd.</span></div>
        </div>
    </>
  );
};

export default Footer;
