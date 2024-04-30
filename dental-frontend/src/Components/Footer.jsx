import React from "react";
import "../Style/Footer1.css";
import Container from "./Container";
import fb from "../assets/images/fb.png";
import inster from "../assets/images/inster.png";
import linkedin from "../assets/images/Linkedin.png";
import youtube from "../assets/images/Youtube.png";
import logo from "../assets/images/logoo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container size="footer1">
        <div className="footer-row">
          <div className="footer-column">
            <img className="openimg" src={logo} alt="logo" />
          </div>
          <div className="footer-column3">
            <h3>NAVIGATE</h3>
            <Link to="/" className="link-without-underline1">
              <p>Home</p>{" "}
            </Link>
            <Link to="/about" className="link-without-underline1">
              <p>About</p>
            </Link>
            <Link to="/setvices" className="link-without-underline1">
              <p>Services</p>
            </Link>
            <Link to="/contact" className="link-without-underline1">
              <p>Contact</p>
            </Link>
          </div>
          <div className="footer-column1">
            <h3>CONNECT</h3>
            <p>Email: smiledental@gmail.com</p>
            <p>Phone: 071-012-1234</p>
            <p>Address: Church Rd,Ratnapura</p>
          </div>
          <div className="footer-column">
            <h3>SOCIALIZE</h3>
            <p>
              <img className="openimg" src={fb} alt="logo" />
            </p>
            <p>
              <img className="openimg" src={inster} alt="logo" />
            </p>
            <p>
              <img className="openimg" src={linkedin} alt="logo" />
            </p>
            <p>
              {" "}
              <img className="openimg" src={youtube} alt="logo" />
            </p>
          </div>
        </div>
        <p>Copyright © 2024 Smile Dental Clinic</p>
      </Container>
    </footer>
  );
};

export default Footer;
