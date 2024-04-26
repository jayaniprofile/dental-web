import React from "react";
import ResponsiveAppBar from "../Components/NavBar";
import Container from "../Components/Container";
import pic1 from "../assets/images/services2.png";
import "../Style/Services.css";
import white from "../assets/images/whitening.webp";
import clean from "../assets/images/cleaning.webp";
import fill from "../assets/images/fillings.webp";
import implant from "../assets/images/implants.webp";
import bridge from "../assets/images/bridge.webp";
import rct from "../assets/images/RCT.webp";
import design from "../assets/images/design.webp";
import dentures from "../assets/images/denture2.webp";
import other from "../assets/images/other.webp";

export default function Services() {
  return (
    <div>
      <ResponsiveAppBar />
      <Container size="ser1">
        <div className="sercontainer">
          <div className="who">
            <h1 className="animated-text">Services</h1>
          </div>
          <div className="photo1">
            <img className="pic1" src={pic1} alt="pic1" />
          </div>
        </div>
      </Container>

      <Container size="grp2">
        <Container size="tone">
          <h3>Teeth Whitening</h3>
          <img className="white" src={white} alt="logo" />
        </Container>
        <Container size="ttwo">
          <h3>Cleaning & Polishing (Scaling)</h3>
          <img className="clean" src={clean} alt="logo" />
        </Container>
        <Container size="tthree">
          <h3>Tooth Coloured Fillings</h3>
          <img className="fill" src={fill} alt="logo" />
        </Container>
        <Container size="tfour">
          <h3>Dental Implants</h3>
          <img className="implant" src={implant} alt="implant" />
        </Container>
        <Container size="tfive">
          <h3>Crowns & Bridges</h3>
          <img className="bridge" src={bridge} alt="logo" />
        </Container>
        <Container size="tsix">
          <h3>Nerve Fillings</h3>
          <img className="rct" src={rct} alt="logo" />
        </Container>
        <Container size="tseven">
          <h3>Smile Design</h3>
          <img className="design" src={design} alt="design" />
        </Container>
        <Container size="teight">
          <h3>Dentures</h3>
          <img className="dentures" src={dentures} alt="logo" />
        </Container>
        <Container size="tnine">
          <h3>Other Treatments</h3>
          <img className="other" src={other} alt="logo" />
        </Container>
      </Container>
    </div>
  );
}
