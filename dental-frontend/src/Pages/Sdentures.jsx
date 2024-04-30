import React from "react";
import "../Style/Sdentures.css";
import ResponsiveAppBar from "../Components/NavBar";
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import fdenture from "../assets/images/fdenture.webp";
import pdenture1 from "../assets/images/pdenture1.webp";
import pdenture2 from "../assets/images/pdenture2.jpg";
import identure from "../assets/images/identure.webp";
import { Button } from "@mui/material";

export default function Sdentures() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container size="sdentures1">
        <h1>Dentures</h1>
        <p className="sss">
          Dentures are removable dental prosthetics used to replace missing
          teeth and surrounding tissues. They can be made of acrylic resin,
          porcelain, or a combination of materials. And are custom-made to fit
          the individual patient’s mouth. Dentures can either be full, replacing
          all teeth in an arch, or partial, replacing only a few missing teeth.
          They can provide aesthetic and functional benefits, such as improving
          speech, chewing ability, and facial appearance. Dentures require
          proper care and maintenance to ensure their longevity and
          effectiveness.
          <br></br>There are several types of dentures, including:
        </p>
        <ol className="ol-left">
          <li>
            <strong>Conventional full denture</strong>
            <ul>
              <li>
                These replace all the teeth in the upper or lower arch of the
                mouth.
              </li>
              <li>
                Placed after the gums have fully healed from any extractions.
              </li>
            </ul>
          </li>
          <li>
            <strong>Immediate full denture</strong>
            <ul>
              <li>
                These are placed immediately after any necessary teeth are
                removed, allowing the patient to have teeth during the healing
                process.
              </li>
            </ul>
          </li>
          <li>
            <strong>Partial denture</strong>
            <ul>
              <li>
                These replace one or more missing teeth and are attached to the
                remaining natural teeth with metal or plastic clasps.
              </li>
            </ul>
          </li>
          <li>
            <strong>Implant-supported denture</strong>
            <ul>
              <li>
                These are attached to dental implants that are surgically placed
                in the jawbone, providing more stability and a better fit.
              </li>
            </ul>
          </li>
          <li>
            <strong>Overdentures</strong>
            <ul>
              <li>
                These are a type of implant-supported denture that can be
                removed for cleaning and maintenance.
              </li>
            </ul>
          </li>
        </ol>
        <p className="sss">
          The type of denture that is best for each individual will depend on
          several factors, including the extent of tooth loss, oral health, and
          personal preferences. A dental professional can provide guidance on
          the most appropriate type of denture for a particular patient.
        </p>
        <h2>Full dentures</h2>
        <img className="bridge" src={fdenture} alt="logo" />
        <p className="sss">
          full dentures replaces all the teeth in the upper or lower arch of the
          mouth. And it can be made of acrylic resin or other materials.
          Dentists customize full dentures to fit each patient’s mouth, and they
          typically stay in place by suction, and sometimes with the aid of
          denture adhesive. They can improve the appearance of the mouth, help
          with speaking and chewing, and support the facial muscles. However, it
          can take some time to adjust to wearing full denture, and proper care
          and maintenance are necessary to ensure their longevity and
          effectiveness.
        </p>
        <h2>Partial dentures</h2>
        <img className="bridge" src={pdenture1} alt="logo" />
        <img className="bridge" src={pdenture2} alt="logo" />
        <p className="sss">
          A partial denture is a removable dental prosthesis to replace one or
          more missing teeth. It consists of artificial teeth that attached to a
          base made of acrylic resin. There are other materials, and metal or
          plastic clasps that attach to the remaining natural teeth. Partial
          dentures are custom-made to fit the patient’s mouth. And can help to
          improve the appearance of the mouth, as well as improve speech and
          chewing ability. Like full denture, partial dentures require proper
          care and maintenance to ensure their longevity and effectiveness. We
          consider them a more cost-effective option for tooth replacement
          compared to dental implants or fixed dental bridges.
        </p>
        <h2>Implant supported / retained denture</h2>
        <img className="bridge" src={identure} alt="logo" />
        <p className="sss">
          Implant-supported dentures, which are a type of dental prosthesis,
          attach to dental implants. The implants provide stability and support
          for the denture, making it a more secure and functional option
          compared to traditional removable dentures. Implant-supported dentures
          have the capability to replace all the teeth in the upper or lower
          arch of the mouth, or just a few missing teeth. They are custom-made
          to fit the individual patient’s mouth and can help improve chewing
          ability, speech, and overall comfort. Implant-supported dentures can
          be removable for cleaning and maintenance, or fixed in place using a
          variety of attachment systems. They are generally more expensive than
          traditional dentures, but offer several benefits in terms of comfort,
          stability, and longevity.
        </p>
        <Button variant="contained" sx={{ fontSize: "50px" }}>
          Book Now
        </Button>
      </Container>
      <Footer />
    </div>
  );
}
