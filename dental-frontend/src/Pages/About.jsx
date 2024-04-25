import React from "react";
import ResponsiveAppBar from "../Components/NavBar";
import Container from "../Components/Container";
import "../Style/About.css";
import pic1 from "../assets/images/women.png";
import dr from "../assets/images/dr.jpg";
import { Button } from "@mui/material";

export default function About() {
  return (
    <div className="App">
      <ResponsiveAppBar />

      <Container size="ab"></Container>

      <Container size="ab1">
        <div className="ab1container">
          <div className="who">
            <h1 className="animated-text">Who We Are</h1>
          </div>
          <div className="photo1">
            <img className="pic1" src={pic1} alt="pic1" />
          </div>
        </div>
      </Container>

      <Container size="ab2">
        <h1 className="animated-text1">About Us</h1>
        <p className="para1">
          Delta Dental Smiles PLLC is a Texas-based pioneer in the field of
          successful teledentistry, driven by interprofessional collaboration.
          Our practice manages an average of 20 patients per day at each
          location, harnessing the power of digital tools to deliver top-notch
          dental care. With a track record spanning one year, our expertise is
          rooted in innovation and technology.
        </p>
        <p className="para2">
          In addition to our commitment to quality care, we offer an exclusive
          internal membership plan to our patients. This plan not only saves our
          patients thousands of dollars but also simplifies the payment process
          by eliminating the complexities of copays, deductibles, and
          out-of-pocket expenses. At Delta Dental Smiles, we are dedicated to
          making dental care accessible, affordable, and hassle-free for all.
        </p>
        <img className="dr" src={dr} alt="logo" />
      </Container>
      <Container size="ab3">
        <Button href="#text-buttons" sx={{ fontSize: "80px" }}>
          Book Now
        </Button>
      </Container>
      <Container size="last">
        <p>Copyright © 2024 Smile Dental Clinic</p>
      </Container>
    </div>
  );
}
