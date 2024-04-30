import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Container from "../Components/Container";
import Logo from "../assets/images/shutterstock_1197258550-1.webp";
import "../Style/Home.css";
import DentolLogo from "../assets/images/logodental1.jpeg";
import white from "../assets/images/whitening.webp";
import clean from "../assets/images/cleaning.webp";
import fill from "../assets/images/fillings.webp";
import implant from "../assets/images/implants.webp";
import bridge from "../assets/images/bridge.webp";
import rct from "../assets/images/RCT.webp";
import design from "../assets/images/design.webp";
import dentures from "../assets/images/denture2.webp";
import other from "../assets/images/other.webp";
import ResponsiveAppBar from "../Components/NavBar";
import openimg from "../assets/images/openimg.gif";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "" }}>
        <Container size="one">
          <p className="dental">Smile Dental Clinic</p>
        </Container>
        <Container size="two">
          <img className="logo1" src={Logo} alt="logo" />
        </Container>
        <Container size="three">
          <p className="great-smile">Great Smile..... Fresh Breath... </p>
        </Container>
        <Container size="four">
          <img className="img1" src={DentolLogo} alt="logo" />
          <p>
            Providing our patients with exceptional dental services with cutting
            edge technology that affirms, our patients receive the best ever
            treatment that dentistry has to offer. We are enthusiastic about
            offering the highest level of professional, compassionate dentistry,
            general, cosmetic and dental specialist treatments.
          </p>
        </Container>

        <Container size="grp1">
          <Container size="topic">
            <h1>Why Choose Smile Dental</h1>
          </Container>
          <Link to="/about" className="link-without-underline">
            <Container size="six">
              <h2>5 Stars Reviews in Google</h2>
              <p>
                We are currently the highest-rated dental service in Sri Lanka.
                Five out of five stars on Google reviews
              </p>
            </Container>
          </Link>

          <Link to="/about" className="link-without-underline">
            <Container size="eight">
              <h2>Easy to understand pricing</h2>
              <p>
                Every cost is listed publicly & isn’t hidden. No surprise fees.
              </p>
            </Container>
          </Link>

          <Link to="/about" className="link-without-underline">
            <Container size="nine">
              <h2>Quality and Comfort</h2>
              <p>
                Experts clinicians, guided by science.Relaxing care in a calm
                environment
              </p>
            </Container>
          </Link>

          <Link to="/about" className="link-without-underline">
            <Container size="ten">
              <h2>Continuity of Care</h2>
              <p>
                We are responsible for everything. All the inquiries & complaint
                will be handled directly by Dr. Lahiru Rajakaruna.
              </p>
            </Container>
          </Link>
        </Container>

        <Container size="grp2">
          <Container size="topic2">
            <h1>Our Services</h1>
            <p>
              Smile Dental offers a comprehensive range of dental treatments and
              services to meet the individual needs of our patients. Our
              experienced and knowledgeable doctors are dedicated to providing
              the highest quality of care to promote optimal oral health. For
              more information about the treatments and services offered by
              Smile Dental, we encourage you to schedule a free consultation
              with one of our doctors.
            </p>
          </Container>
          <Link to="/swhite">
            <Container size="tone">
              <h3>Teeth Whitening</h3>
              <img className="white" src={white} alt="logo" />
            </Container>
          </Link>

          <Link to="/sclean">
            <Container size="ttwo">
              <h3>Cleaning & Polishing (Scaling)</h3>
              <img className="clean" src={clean} alt="logo" />
            </Container>
          </Link>

          <Link to="/sfilling">
            <Container size="tthree">
              <h3>Tooth Coloured Fillings</h3>
              <img className="fill" src={fill} alt="logo" />
            </Container>
          </Link>

          <Link to="/simplant">
            <Container size="tfour">
              <h3>Dental Implants</h3>
              <img className="implant" src={implant} alt="implant" />
            </Container>
          </Link>

          <Link to="/scrown">
            <Container size="tfive">
              <h3>Crowns & Bridges</h3>
              <img className="bridge" src={bridge} alt="logo" />
            </Container>
          </Link>

          <Container size="tsix">
            <h3>Nerve Fillings</h3>
            <img className="rct" src={rct} alt="logo" />
          </Container>

          <Link to="/sdesign">
            <Container size="tseven">
              <h3>Smile Design</h3>
              <img className="design" src={design} alt="design" />
            </Container>
          </Link>

          <Container size="teight">
            <h3>Dentures</h3>
            <img className="dentures" src={dentures} alt="logo" />
          </Container>
          <Container size="tnine">
            <h3>Other Treatments</h3>
            <img className="other" src={other} alt="logo" />
          </Container>
        </Container>

        <Container size="opn">
          <div className="open">
            <h1>Opening Hours</h1>
            <div className="open-container">
              <div className="open-column">
                <div className="open1">
                  <h3>Monday to Friday: 4.00pm - 7.00pm</h3>
                  <h3>Saturday: 12.00pm - 6.00pm</h3>
                  <h3>Sunday: 10.00am - 2.00pm</h3>
                </div>
                <div className="open2">
                  <img className="openimg" src={openimg} alt="logo" />
                </div>
              </div>
              <div className="button-container">
                <Button variant="contained" color="success" size="large">
                  Book Online
                </Button>
              </div>
            </div>
          </div>
        </Container>

        <Footer />
      </div>
    </div>
  );
}
