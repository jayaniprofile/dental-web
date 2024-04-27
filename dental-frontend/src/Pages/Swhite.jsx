import React from "react";
import ResponsiveAppBar from "../Components/NavBar";
import "../Style/Swhite.css";
import Container from "../Components/Container";
import swhite from "../assets/images/whitening.webp";
import { Button } from "@mui/material";

export default function Swhite() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container size="steeth1">
        <h1>Teeth Whitening</h1>
        <p className="sss">
          Tooth whitening can be a very effective way of lightening the natural
          colour of your teeth without removing any of the tooth surface. It
          cannot make a complete colour change, but it may lighten the existing
          shade.
        </p>
        <h2>Why You May Need Teeth Whitening</h2>
        <p>
          A great smile is a great social asset and can boost self-confidence,
          so it’s no surprise, whitening treatments are now more popular than
          ever. Teeth whitening can improve your appearance for an upcoming job
          interview or special occasion, such as a wedding or graduation. You
          can also use whitening to reduce the effects of tooth discolouration
          or achieve a more youthful appearance.
        </p>
        <img className="white" src={swhite} alt="logo" />
        <h2>Causes of Tooth Discolouration</h2>
        <p>
          There are many reasons teeth can become discoloured. Risk factors
          include but are not limited to:
        </p>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Cola</li>
          <li>Red wine</li>
          <li>
            Ingredients such as berries, apples, potatoes, and certain spices
          </li>
          <li>Poor dental hygiene</li>
          <li>Advancing age</li>
          <li>Smoking</li>
          <li>Genetic factors</li>
          <li>Some medications</li>
          <li>Diseases</li>
        </ul>
        <p>
          It is advisable to visit a dentist to better understand the cause of
          your tooth discolouration and get professional help on how to manage
          the problem.
        </p>
        <h2>Suitability for Teeth Whitening</h2>
        <p>
          Before deciding to use a tooth whitening procedure, it is advisable to
          consult with a dentist and discuss the type and severity of
          discolouration you are experiencing and your motivations for
          undergoing the treatment. Individuals should be mature enough to
          understand the risks and limitations of the procedure. Not all types
          of tooth discolouration will respond the same way to whitening
          procedures. Whitening typically works best on yellow teeth and is less
          effective on grey, brown or black stains. It is important to have
          realistic expectations of how much improvement is possible. Human
          teeth are not perfectly white and vary in colour for each person.
          Treatment will not completely whiten teeth but will instead lighten
          the colour.
        </p>
        <h2>Whitening may not be appropriate for you, if:</h2>
        <ul>
          <li>
            You have crowns or plastic fillings (whitening can affect the bond
            between fillings and teeth)
          </li>
          <li>You have cavities or early cavities</li>
          <li>You have a gum condition such as gum recession</li>
          <li>You have sensitive teeth or gums</li>
          <li>You are pregnant or breastfeeding</li>
          <li>You are under 18</li>
        </ul>
        <p>
          Consult with your dentist to determine what treatments are available
          for your individual circumstances.
        </p>
        <h2>Risks and Possible Complications for Teeth Whitening</h2>
        <p>
          Teeth whitening is safe when done correctly by a professional,
          although minor complications are possible. Some people notice their
          teeth are more sensitive during the 24 hours following treatment.
          Others report irritation of the gums, which is probably due to
          whitening gel leaking from the teeth. Too many treatments can leave
          the tooth looking pale and translucent. This change can be permanent
          and would require replacement of the tooth to fix – a major procedure.
        </p>
        <p>
          People are often eager to obtain the best possible results with their
          treatment. Sometimes the gel is left in for too long in the hope of
          achieving whiter teeth. This can cause the chemicals to penetrate too
          deeply and damage the inner layer of the tooth, the pulp.
        </p>
        <p>
          To avoid complications from using take-home whitening products, ask
          your dentist for advice or invest in a professional whitening
          treatment.
        </p>
        <Button variant="contained">Book Now</Button>
      </Container>
      <Container size="last">
        <p>Copyright © 2024 Smile Dental Clinic</p>
      </Container>
    </div>
  );
}
