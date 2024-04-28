import React from "react";
import "../Style/Sclean.css";
import Container from "../Components/Container";
import ResponsiveAppBar from "../Components/NavBar";
import sclean from "../assets/images/cleaning.webp";
import { Button } from "@mui/material";

export default function Sclean() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container size="sclean1">
        <h1>Cleaning and Polishing</h1>
        <img className="clean" src={sclean} alt="logo" />
        <h2>What is a dental cleaning?</h2>
        <p className="sss">
          Most of the people visiting the dentist have a lot of anticipation
          regarding the cleaning procedure. They apprehend it to be a painful
          and uncomfortable process. However, one should know about the entire
          process before having any such fears. In short, dental cleaning
          consists of steps to clean around the gum line and remove all the
          tartar and plaque.
        </p>
        <h2>Below is the process in detail:</h2>
        <p className="sss">
          <b>Examining the mouth physically:</b> First of all, the dental
          hygienist checks the mouth with a small mirror. It is to make sure
          that there are no major dental issues. If some symptom prevails, the
          hygienist calls the dentist to make them fine to proceed.<br></br>
          <b>Remove plaque and tartar:</b> The hygienist now uses a scalar to
          remove the tartar and plaque around the gum line and in between the
          teeth.<br></br>
          <b>Cleaning with toothpaste:</b> After all the tartar is wiped out,
          the dentist will clean the teeth with an electric toothbrush. It is
          for the deep cleaning of teeth.
        </p>
        <h2>What is dental polishing?</h2>
        <p className="sss">
          Dental polishing is sometimes used interchangeably with a dental
          cleaning, but there is a slight difference in the process. Dental
          polishing is a broader aspect where the teeth are not only checked for
          the tartar and plaque but also polished to give the tooth enamel a
          smooth and glossy look.
        </p>
        <h2>The steps for dental polishing are as follows:</h2>
        <ul className="ul-left">
          <li>Inspection of teeth for decay</li>
          <li>The scrapping of plaque and tartar</li>
          <li>Removing stains with buff and polish</li>
          <li>Flossing</li>
          <li>Fluoride treatment</li>
        </ul>
        <p className="sss">
          Dental cleaning and polishing both are an essential part of dental
          hygienic processes. All the steps performed in the two methods from
          the inspection to the final polishing are far more effective than the
          regular brushing and flossing you do at home.
        </p>
        <p className="sss">
          Book Appointment to find out which treatment might be best for you.
        </p>
        <Button variant="contained" sx={{ fontSize: "50px" }}>
          Book Now
        </Button>
      </Container>
      <Container size="last">
        <p>Copyright © 2024 Smile Dental Clinic</p>
      </Container>
    </div>
  );
}
