import React from "react";
import ResponsiveAppBar from "../Components/NavBar";
import Container from "../Components/Container";
import sfill from "../assets/images/fillings.webp";
import { Button } from "@mui/material";
import "../Style/Sfilling.css";
import Footer from "../Components/Footer";

export default function Sfilling() {
  return (
    <div className="App">
      <ResponsiveAppBar />

      <Container size="sfilling1">
        <h1>Tooth Coloured Fillings</h1>
        <img className="fill" src={sfill} alt="logo" />
        <h2>WHAT IS A FILLING?</h2>
        <p className="sss">
          A dental filling repairs the damage caused by tooth decay or a
          fracture. It restores the natural appearance of a decayed or
          previously filled tooth. Dental fillings today are tooth coloured,
          which blend very well to tooth enamel and are able to bond to the
          remaining tooth structure. Composite fillings(The best tooth coloured
          filling) are the most popular fillings to date. They are
          natural-looking and made from composite resin. Composite fillings
          begin soft and they are hand-shaped during the filling process. A blue
          light is then used to cure the composite to harden it. Composite
          fillings are very durable and bond well to tooth enamel.
        </p>
        <h2>WHAT HAPPENS IN A FILLING PROCEDURE?</h2>
        <p className="sss">
          Prior to any filling procedure, your dentist will talk to you about
          your options to determine which filling type would be best suited and
          how to plan for them. During your appointment, local anaesthetic will
          be administered to the affected area to numb the tooth and surrounding
          structures. The decay will then be removed, usually using a dental
          drill. Once only strong and healthy tooth structure remains, the
          cavity is disinfected and dried before filling material is placed. The
          dentist will shape and cure the filling to harden it before checking
          your bite and ensuring it is comfortable.
        </p>
        <h2>AFTER THE FILLING PROCEDURE</h2>
        <p className="sss">
          It is advised not to eat or drink for 2–3 hours after a filling
          procedure due to the local anaesthetic. Once the local anaesthetic has
          worn off, you may experience some sensitivity in the area for a few
          days. For some people, it can take a couple of weeks for the filling
          to settle down.<br></br>If you experience any pain or if the filling
          does not feel right, please see your dentist as soon as possible.
        </p>
        <h2>HOW LONG DOES A FILLING LAST?</h2>
        <p className="sss">
          Depending on which type of filling you opt for, fillings can last more
          than 20 years. Fillings are placed under constant stress and movement
          from eating or even grinding, and this can cause fillings to wear away
          faster. When a filling is no longer in good condition, it can result
          in further decay, cracks or fractures. Therefore, it is important to
          visit your dentist regularly for oral hygiene maintenance to help
          extend the life of your fillings.
        </p>
        <Button variant="contained" sx={{ fontSize: "50px" }}>
          Book Now
        </Button>
      </Container>
      <Footer />
    </div>
  );
}
