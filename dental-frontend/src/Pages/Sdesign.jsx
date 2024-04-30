import React from "react";
import "../Style/Sdesign.css";
import ResponsiveAppBar from "../Components/NavBar";
import Container from "../Components/Container";
import design from "../assets/images/design.webp";
import { Button } from "@mui/material";
import Footer from "../Components/Footer";

export default function Sdesign() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container size="sdesign1">
        <h1>Smile Design and Cosmetic Dentistry</h1>
        <p className="sss">
          Smile design and cosmetic dentistry refers to the process of improving
          the appearance of a person’s smile through various cosmetic dental
          treatments, such as teeth whitening, veneers, or orthodontic
          treatments. The goal is to create a smile that is aesthetically
          pleasing, in harmony with the person’s facial features, and in line
          with their personal preferences.
        </p>
        <img className="bridge" src={design} alt="logo" />
        <p className="sss">
          The Smile design and cosmetic dentistry process in our dental clinic
          typically involves the following steps:
        </p>
        <ul className="ul-left">
          <li>
            Consultation: The dentist will discuss the patient’s goals,
            concerns, and preferences, and examine their teeth, gums, and facial
            features.
          </li>
          <li>
            Treatment planning: Based on the examination and consultation, the
            dentist will create a customized treatment plan. That may include
            various cosmetic dental procedures.
          </li>
          <li>
            Digital imaging: The dentist may request/use digital imaging
            technology. And create a 3D model of the teeth and gums, and show
            the patient a preview of their new smile.
          </li>
          <li>
            Treatment implementation: The actual cosmetic dental treatments will
            be performed according to the treatment plan. It may include teeth
            whitening, veneers, orthodontic treatments, or other procedures.
          </li>
          <li>
            Follow-up and maintenance: The dentist will advise the patient on
            maintaining their new smile through good oral hygiene practices and
            regular dental checkups.
          </li>
        </ul>
        <p className="sss">
          The specific details of the smile design process may vary depending on
          the patient’s individual needs
        </p>
        <Button variant="contained" sx={{ fontSize: "50px" }}>
          Book Now
        </Button>
      </Container>
      <Footer />
    </div>
  );
}
