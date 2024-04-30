import React from "react";
import ResponsiveAppBar from "../Components/NavBar";
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import rct from "../assets/images/RCT.webp";
import { Button } from "@mui/material";
import "../Style/Snerve.css";

export default function Snerve() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container size="snerve1">
        <h1>Root Canal Treatment</h1>
        <img className="rct" src={rct} alt="logo" />
        <p className="sss">
          Dentists perform root canal treatment (RCT), also called nerve
          filling, to remove infected or damaged pulp from inside a tooth.The
          pulp is a soft tissue that contains nerves, blood vessels, and
          connective tissue.
          <br></br>Here is a general overview of the procedure:
        </p>
        <ol className="ol-left">
          <li>
            Anesthesia: The dentist numbs the area around the tooth to ensure
            the patient’s comfort during the procedure.
          </li>
          <li>
            Access: The dental surgeon makes a small hole in the top of the
            tooth to access the infected or damaged pulp.
          </li>
          <li>
            Cleaning: The dentist will use special tools to remove the damaged
            or infected pulp. Then clean the inside of the tooth.
          </li>
          <li>
            Shaping: The dentist will shape the inside of the root canals, which
            are the channels that contain the pulp, to prepare for filling.
          </li>
          <li>
            Filling: The dental surgeon fills the root canals with gutta-percha,
            which seals them and prevents further infection.
          </li>
          <li>
            Restoration: The dentist places a crown or filling on the tooth to
            restore its function and appearance.
          </li>
        </ol>
        <p className="sss">
          After the procedure, the tooth will be numb for a few hours. The
          patient may experience some discomfort and sensitivity for a few days.
          However, with proper care, most teeth that have had root canal
          treatment can last a lifetime.
        </p>
        <Button variant="contained" sx={{ fontSize: "50px" }}>
          Book Now
        </Button>
      </Container>
      <Footer />
    </div>
  );
}
