import React from "react";
import ResponsiveAppBar from "../Components/NavBar";
import Container from "../Components/Container";
import spic1 from "../assets/images/services2.png";
import "../Style/Services.css";
import swhite from "../assets/images/whitening.webp";
import sclean from "../assets/images/cleaning.webp";
import sfill from "../assets/images/fillings.webp";
import simplant from "../assets/images/implants.webp";
import sbridge from "../assets/images/bridge.webp";
import srct from "../assets/images/RCT.webp";
import sdesign from "../assets/images/design.webp";
import sdentures from "../assets/images/denture2.webp";
import sother from "../assets/images/other.webp";
import { Button } from "@mui/material";

export default function Services() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container size="ser1">
        <div className="sercontainer">
          <div className="swho">
            <h1 className="animated-text">Services</h1>
          </div>
          <div className="sphoto1">
            <img className="spic1" src={spic1} alt="pic1" />
          </div>
        </div>
      </Container>

      <Container size="sgrp2">
        <Container size="stone">
          <h3>Teeth Whitening</h3>
          <img className="white" src={swhite} alt="logo" />
          <p className="para1">
            Tooth whitening can be a very effective way of lightening the
            natural colour of your teeth without removing any of the tooth
            surface. It cannot make a complete colour change, but it may lighten
            the existing shade........
          </p>
          <div className="button-container">
            <Button variant="contained">More</Button>
          </div>
        </Container>
        <Container size="sttwo">
          <h3>Cleaning & Polishing (Scaling)</h3>
          <img className="clean" src={sclean} alt="logo" />
          <p className="para1">
            Most of the people visiting the dentist have a lot of anticipation
            regarding the cleaning procedure. They apprehend it to be a painful
            and uncomfortable process. However, one should know about the entire
            process before having any such fears..........
          </p>
          <div className="button-container">
            <Button variant="contained">More</Button>
          </div>
        </Container>
        <Container size="stthree">
          <h3>Tooth Coloured Fillings</h3>
          <img className="fill" src={sfill} alt="logo" />
          <p className="para1">
            A dental filling repairs the damage caused by tooth decay or a
            fracture. It restores the natural appearance of a decayed or
            previously filled tooth. Dental fillings today are tooth coloured,
            which blend very well......
          </p>
          <div className="button-container">
            <Button variant="contained">More</Button>
          </div>
        </Container>
        <Container size="stfour">
          <h3>Dental Implants</h3>
          <img className="implant" src={simplant} alt="implant" />
          <p className="para1">
            Dental implants are a type of tooth replacement that are made up of
            three parts: the implant (a small titanium fixture), the abutment (a
            connecting structure), and the artificial tooth. They are surgically
            placed in the jawbone and serve as......
          </p>
          <div className="button-container">
            <Button variant="contained">More</Button>
          </div>
        </Container>
        <Container size="stfive">
          <h3>Crowns & Bridges</h3>
          <img className="bridge" src={sbridge} alt="logo" />
          <p className="para1">
            If you have missing teeth, including front teeth, a dental bridge
            can help restore the look and function of your teeth. It bridges the
            gap where the missing tooth is. Talk to a dental professional to
            find out if it’s right for you...........
          </p>
          <div className="button-container">
            <Button variant="contained">More</Button>
          </div>
        </Container>
        <Container size="stsix">
          <h3>Nerve Fillings</h3>
          <img className="rct" src={srct} alt="logo" />
          <p className="para1">
            Dentists perform root canal treatment (RCT), also called nerve
            filling, to remove infected or damaged pulp from inside a tooth.The
            pulp is a soft tissue that contains nerves, blood vessels, and
            connective tissue.......
          </p>
          <div className="button-container">
            <Button variant="contained">More</Button>
          </div>
        </Container>
        <Container size="stseven">
          <h3>Smile Design</h3>
          <img className="design" src={sdesign} alt="design" />
          <p className="para1">
            Smile design and cosmetic dentistry refers to the process of
            improving the appearance of a person’s smile through various
            cosmetic dental treatments, such as teeth whitening, veneers, or
            orthodontic treatments...........
          </p>
          <div className="button-container">
            <Button variant="contained">More</Button>
          </div>
        </Container>
        <Container size="steight">
          <h3>Dentures</h3>
          <img className="dentures" src={sdentures} alt="logo" />
          <p className="para1">
            Dentures are removable dental prosthetics used to replace missing
            teeth and surrounding tissues. They can be made of acrylic resin,
            porcelain, or a combination of materials. And are custom-made to fit
            the individual patient’s mouth..........
          </p>
          <div className="button-container">
            <Button variant="contained">More</Button>
          </div>
        </Container>
        <Container size="stnine">
          <h3>Other Treatments</h3>
          <img className="other" src={sother} alt="logo" />
        </Container>
      </Container>
      <Container size="last">
        <p>Copyright © 2024 Smile Dental Clinic</p>
      </Container>
    </div>
  );
}
