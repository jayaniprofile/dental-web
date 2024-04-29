import React from "react";
import "./Footer.css";
import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container size="footer">
        <div className="footer-row">
          <div className="footer-column">
            <img src="default-logo" alt="Default Logo" />
          </div>
          <div className="footer-column">
            <h3>NAVIGATE</h3>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
          <div className="footer-column">
            <h3>CONNECT</h3>
            <p>Email: info@deltadentalsmiles.live</p>
            <p>Phone: 971-999-3399</p>
          </div>
          <div className="footer-column">
            <h3>SOCIALIZE</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Linkedin</p>
            <p>Youtube</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
